"use client";
import { useSearchParams } from "next/navigation";
import {
  ChangeEvent,
  ReactNode,
  createContext,
  useEffect,
  useState,
} from "react";
import * as Yup from "yup";

type FormValuesType = {
  eventType: string;
  location: string;
  minPrice: number;
  maxPrice: number;
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
  minPrice: Yup.number().required("Min Price is required"),
  maxPrice: Yup.number().required("Max Price is required"),
  location: Yup.string().required("Location is required"),
  rating: Yup.string().required("rating is required"),
});

export const SearchContext = createContext<FormContext | null>(null);

export default function SearchProvider({
  children,
}: {
  children: ReactNode;
}) {
  const searchParams = useSearchParams();
  const jobId = searchParams.get("id");
  const [open, setOpen] = useState(false);

  const onJobCreateSuccess = () => {
    setOpen(true);
  };

  const formik = useFormik<FormValuesType>({
    initialValues: {
      
      eventType: "",
      minPrice: "",
      maxPrice: "",
      location: "",
      rating: "",
    },
    validationSchema,
    onSubmit: async (values) => {
   
    },
  });

  useEffect(() => {
    (async () => {
   
    })();
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
