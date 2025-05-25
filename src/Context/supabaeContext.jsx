import { createClient } from "@supabase/supabase-js";
import React, { createContext, useState, useContext, useEffect } from "react";

// Create the context
const SupabaseContext = createContext(undefined);

// Create a provider component
export const SupabaseProvider = ({ children }) => {
  const [supabase, setSupabase] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

    const client = createClient(supabaseUrl, supabaseAnonKey);
    setSupabase(client);
  }, []);

  const saveOrder = async (orderData) => {
    delete orderData.order_date;
    delete orderData.product_id;
    if (!supabase) {
      return { success: false, error: "Supabase client not initialized" };
    }

    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from("user_checkout_forms")
        .insert(orderData)
        .select();

      if (error) throw error;

      return { success: true, data };
    } catch (error) {
      console.error("Error saving order:", error.message);
      return { success: false, error: error.message };
    } finally {
      setIsLoading(false);
    }
  };

  const orderRequestData = async (formData) => {
    if (!supabase) {
      return { success: false, error: "Supabase client not initialized" };
    }

    // Data mapping for order_waitlist table
    const waitlistEntry = {
      name: formData.name || "",
      email: formData.email || "",
      number: formData.number || "",
      // message: formData.message || "",
    };

    // Insert into Supabase table: order_waitlist
    const { data, error } = await supabase
      .from("order_waitlist")
      .insert([waitlistEntry]);

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true, data };
  };

  return (
    <SupabaseContext.Provider
      value={{ supabase, saveOrder, isLoading, orderRequestData }}
    >
      {children}
    </SupabaseContext.Provider>
  );
};

// Custom hook to use Supabase context
export const useSupabase = () => {
  const context = useContext(SupabaseContext);
  if (context === undefined) {
    throw new Error("useSupabase must be used within a SupabaseProvider");
  }
  return context;
};
