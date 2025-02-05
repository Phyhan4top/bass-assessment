"use client";
import { useRouter } from "next/navigation";
import {
  ChangeEvent,
  ReactNode,
  createContext,
  useContext,
  useEffect,
} from "react";
import { FormikProps, useFormik } from "formik";
import * as Yup from "yup";
type FormValuesType = {
  eventType: string;
  location: string;
  priceRange: string;
  rating: string;
};

type FormProps = {
  name: string;
  onChange: {
    (e: ChangeEvent<any>): void;
  };
  value: string | string[] | undefined;
  error: any;
  onBlur: any;
  clearInput: () => void;
};

type formKeyProps = keyof Omit<FormValuesType, "action">;

type FormContext = {
  formProps: (name: formKeyProps) => FormProps;

  formik: FormikProps<FormValuesType>;
  resetForm: () => void;
  updateFormFields: (data: FormValuesType) => void;
};

const validationSchema = Yup.object({
  eventType: Yup.string().required("Job Title is required"),
  priceRange: Yup.string().required("Min Price is required"),
  location: Yup.string().required("Location is required"),
  rating: Yup.string().required("rating is required"),
});

const SearchContext = createContext<FormContext | null>(null);
export const useSearchContext = () => {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error("useSearchContext must be used within a SearchProvide");
  }
  return context;
};

export default function SearchProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const formik = useFormik<FormValuesType>({
    initialValues: {
      eventType: "",
      priceRange: "",
      location: "",
      rating: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      // Convert form values to URLSearchParams
      const params = new URLSearchParams();
      Object.entries(values).forEach(([key, value]) => {
        if (value) params.set(key, value);
      });

      // Push new search parameters to the URL
      router.push(`?${params.toString()}`, { scroll: false });
    },
  });

  useEffect(() => {
    (async () => {})();
  }, []);

  const updateFormFields = (data: FormValuesType) => {
    Object.entries(data).forEach(([field, value]) => {
      formik.setFieldValue(field, value, true);
    });
  };

  const clearInput = (field: string) => {
    formik.setFieldValue(field, "");
  };

  const resetForm = () => {
    formik.resetForm();
  };

  const formProps = (name: formKeyProps) => {
    return {
      name: name,
      onChange: formik.handleChange,
      value: formik.values[name],
      error: formik.touched[name] ? formik.errors[name] : "",
      onBlur: formik.handleBlur,
      clearInput: () => clearInput(name),
    };
  };

  return (
    <SearchContext.Provider
      value={{
        formik,
        formProps,
        resetForm,
        updateFormFields,
      }}
    >
      <form onSubmit={formik.handleSubmit} className="w-full">
        {children}
      </form>
    </SearchContext.Provider>
  );
}
