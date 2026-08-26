import Link from "next/link";
import { SITE_CONFIG } from "@/config/site";

export function Footer() {
  return (
    <footer className="w-full border-t border-stone-200/70 bg-[#F4F1EA] py-8 text-xs text-stone-600">
      <div className="container mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
        <div className="flex flex-col items-center sm:items-start gap-1">
          <p className="font-medium text-stone-800">
            © 2026 Growing Worlds — An Open-Source Educational Diorama
          </p>
          <p className="text-stone-500">
            A static, read-only paper collage gallery built via GitHub Good First Issues.
          </p>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/worlds" className="transition-colors hover:text-stone-900">
            Worlds
          </Link>
          <Link
            href="/how-to-contribute"
            className="transition-colors hover:text-stone-900"
          >
            How to Contribute
          </Link>
          <a
            href={SITE_CONFIG.repositoryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-stone-900"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
