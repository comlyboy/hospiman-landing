interface AuthFormSkeletonComponentProps {
  fieldCount?: number;
}

export default function AuthFormSkeletonComponent({ fieldCount = 2 }: AuthFormSkeletonComponentProps) {
  return (
    <div className="flex animate-pulse flex-col gap-4" aria-hidden="true">
      {Array.from({ length: fieldCount }).map((_, index) => (
        <div key={index} className="flex flex-col gap-1.5">
          <div className="h-3 w-20 rounded bg-line" />
          <div className="h-10 rounded-lg bg-line" />
        </div>
      ))}
      <div className="mt-1 h-12 rounded-[9px] bg-line" />
    </div>
  );
}
