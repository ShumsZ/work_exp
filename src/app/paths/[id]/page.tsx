import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SyllabusView } from "@/components/SyllabusView";
import { getAllPathIds, getPathById } from "@/lib/paths";

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return getAllPathIds().map((id) => ({ id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const path = getPathById(id);

  if (!path) {
    return { title: "Path not found — ComputeBeauty" };
  }

  return {
    title: `${path.title} — ComputeBeauty`,
    description: path.summary,
  };
}

export default async function PathPage({ params }: PageProps) {
  const { id } = await params;
  const path = getPathById(id);

  if (!path) {
    notFound();
  }

  return (
    <>
      <Header />
      <SyllabusView path={path} />
      <Footer />
    </>
  );
}
