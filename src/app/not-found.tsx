import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="container mx-auto flex min-h-[60vh] max-w-lg flex-col items-center justify-center px-4 py-16 text-center">
      <div className="rounded-full bg-stone-100 p-4 mb-4 text-2xl font-mono">
        404
      </div>
      <h1 className="text-2xl font-bold tracking-tight text-stone-900 mb-2">
        World Not Found
      </h1>
      <p className="text-sm text-stone-600 mb-8 max-w-sm">
        The paper diorama you are looking for has not been charted yet, or the world identifier does not exist.
      </p>
      <Link href="/worlds">
        <Button className="gap-2 bg-emerald-900 text-white hover:bg-emerald-800">
          <ArrowLeft className="h-4 w-4" />
          <span>Explore All 10 Worlds</span>
        </Button>
      </Link>
    </div>
  );
}
