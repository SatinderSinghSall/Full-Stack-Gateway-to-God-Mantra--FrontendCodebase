import LoadingSpinner from "./loading-spinner";

export default function ScreenLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/70 backdrop-blur-sm">
      <LoadingSpinner />
    </div>
  );
}
