'use client';

import ErrorTemplate from "@/app/_components/template/ErrorTemplate";



type ErrorProps = {
  error: Error & { statusCode?: number };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  return (
    <ErrorTemplate error={error} title="Failed to load events" reset={reset} />
  );
}
