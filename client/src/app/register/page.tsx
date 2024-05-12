import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import Footer from "@/app/components/footer"
import Navbar from "@/app/components/navbar"
export default async function Register() {
    async function register(formData: FormData) {
        "use server"
        const newUser = {
            name: formData.get("name"),
            email: formData.get("email"),
            username: formData.get("username"),
            password: formData.get("password")
        }
        const res = await fetch(process.env.BASE_URL + '/api/register', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
      })

      const result = await res.json()
    //   console.log(result, "<<<")

      if (!res.ok) {
        throw result
      }
    
      revalidatePath("/login")
      redirect("/login")
    }
    return (
        <>
        <Navbar />
            <section className="h-screen">
                <div className="container h-full px-16 py-24">
                    <div className="flex h-full flex-wrap items-center justify-center lg:justify-between">
                        {/* Left column container with background*/}
                        <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
                            <img
                                src="../login.jpg"
                                className="w-full"
                                alt="login"
                            />
                        </div>
                        {/* Right column container with form */}
                        <div className="md:w-8/12 lg:ms-6 lg:w-5/12">
                            <div className="flex flex-row items-center justify-between">
                                <h2 className="mt-10 mb-6 text-4xl font-bold leading-9 tracking-tight text-gray-900">
                                    Sign Up
                                </h2>
                                {/* Sign in link */}
                                <a
                                    href="/login"
                                    className="text-gray-500 mt-6 focus:outline-none dark:text-gray-200"
                                >
                                    Sign In
                                </a>
                            </div>
                            <form action={register}>
                                 {/* Name input */}
                                 <div className="relative mb-6">
                                    <input
                                        type="text"
                                        className="block w-full rounded-md border-0 py-3.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder="Name"
                                        name="name"
                                    />
                                </div>
                                {/* Email input */}
                                <div className="relative mb-6">
                                    <input
                                        type="text"
                                        className="block w-full rounded-md border-0 py-3.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder="Email Address"
                                        name="email"
                                    />
                                </div>
                                {/* Username input */}
                                <div className="relative mb-6">
                                    <input
                                        type="text"
                                        className="block w-full rounded-md border-0 py-3.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder="Username"
                                        name="username"
                                    />
                                </div>
                                {/* Password input */}
                                <div className="relative mb-6">
                                    <input
                                        type="password"
                                        className="block w-full rounded-md border-0 py-3.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder="Password"
                                        name="password"
                                    />
                                </div>
                                {/* Submit button */}
                                <button
                                    type="submit"
                                    className="inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                                    data-twe-ripple-init=""
                                    data-twe-ripple-color="light"
                                >
                                    Sign up
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}