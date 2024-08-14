"use client"

import { createContext, useContext, useState, ReactNode } from "react";

interface ToastOptions {
  title: string;
  action?: string;
  description?: string;
}

interface ToastContextType {
  toast: (options: ToastOptions) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [toastOptions, setToastOptions] = useState<ToastOptions | null>(null);

  const toast = (options: ToastOptions) => {
    setToastOptions(options);
    setTimeout(() => setToastOptions(null), 10000); // Toast duration
  };

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      {toastOptions && (
        <div
          className={`fixed bottom-4 left-4 p-4 rounded-md shadow-lg ${
            toastOptions.action ? "bg-green-600" : "bg-red-600"
          } text-white`}
        >
          <div>{toastOptions.title}</div>
          {toastOptions.description && <div>{toastOptions.description}</div>}
        </div>
      )}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
