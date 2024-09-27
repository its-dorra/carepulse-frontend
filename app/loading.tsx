const Loading = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <div className="inline-block h-32 w-32 animate-spin rounded-full border-b-2 border-t-2 border-blue-500"></div>
        <h2 className="mt-4 text-xl font-semibold text-white">Loading...</h2>
      </div>
    </div>
  );
};

export default Loading;
