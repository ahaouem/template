import Link from "next/link";

export default function Page() {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <style>
        {`
        @keyframes gradientAnimation {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .gradient-bg {
          animation: gradientAnimation 10s linear infinite;
          background: linear-gradient(45deg, #FFC0CB, #87CEEB, #90EE90, #FFD700, #FFA07A, #FF69B4, #7B68EE);
          background-size: 400% 400%;
        }
        `}
      </style>
      <main className="flex-1">
        <section className="gradient-bg relative flex min-h-[100vh] flex-col items-center justify-center">
          <div className="container relative px-4 text-center md:px-6">
            <div className="flex flex-col items-center space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Build modern web apps with the power of
                <Link href={"https://nextjs.org/"}> Next.js,</Link>
                <Link href={"https://clerk.dev/"}> Clerk, </Link>
                <Link href={"https://orm.drizzle.team/"}> Drizzle,</Link>
                <Link href={"https://neon.tech/"}> Neon, </Link>
                <Link href={"https://env.t3.gg/"}>T3 Env, </Link>
                <Link href={"https://tailwindcss.com/"}> Tailwind, </Link>
                and
                <Link href={"https://ui.shadcn.com/"}> shadcn/ui. </Link>
              </h1>
              <p className="max-w-[600px] text-gray-300 md:text-xl dark:text-gray-400">
                Leverage the latest technologies to create fast, secure, and
                scalable web applications. Streamline your development process
                with a curated stack that just works.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
