import UiSkeleton from "@/app/_components/atom/skeleton";


export default function Loading() {
  return (
    <div className="my-6 flex w-full items-center justify-center">
      <UiSkeleton className="h-32 w-full" />
    </div>
  );
}
