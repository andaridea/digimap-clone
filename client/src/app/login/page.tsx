import Link from "next/link"
export default function Login() {
    return (
        <>
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
                                    Sign In
                                </h2>
                                {/* Register link */}
                                <Link
                                    href="/register"
                                    className="text-gray-500 mt-6 focus:outline-none dark:text-gray-200"
                                >
                                    Create Account
                                </Link>
                            </div>
                            <form>
                                {/* Email input */}
                                <div className="relative mb-6">
                                    <input
                                        type="text"
                                        className="block w-full rounded-md border-0 py-3.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder="Email Address"
                                    />
                                </div>
                                {/* Password input */}
                                <div className="relative mb-6">
                                    <input
                                        type="password"
                                        className="block w-full rounded-md border-0 py-3.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder="Password"
                                    />
                                </div>
                                {/* Remember me checkbox */}
                                <div className="mb-6 flex items-center justify-between">
                                    <div className="mb-[0.125rem] block min-h-[1.5rem] ps-[1.5rem]">
                                        <input
                                            className="relative float-left -ms-[1.5rem] me-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-secondary-500 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ms-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ms-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent rtl:float-right dark:border-neutral-400 dark:checked:border-primary dark:checked:bg-primary"
                                            type="checkbox"
                                            defaultValue=""
                                            id="exampleCheck3"
                                        />
                                        <label
                                            className="inline-block ps-[0.15rem] hover:cursor-pointer"
                                            htmlFor="exampleCheck3"
                                        >
                                            Remember me
                                        </label>
                                    </div>
                                    {/* Forgot password link */}
                                    <a
                                        href="#!"
                                        className="text-primary focus:outline-none dark:text-primary-400"
                                    >
                                        Forgot password?
                                    </a>
                                </div>
                                {/* Submit button */}
                                <button
                                    type="submit"
                                    className="inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                                    data-twe-ripple-init=""
                                    data-twe-ripple-color="light"
                                >
                                    Sign in
                                </button>
                                {/* Divider */}
                                <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300 dark:before:border-neutral-500 dark:after:border-neutral-500">
                                    <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                                        OR
                                    </p>
                                </div>
                                {/* Social login buttons */}
                                <a
                                    className="mb-3 flex w-full items-center justify-center rounded bg-primary px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                                    style={{ backgroundColor: "#3b5998" }}
                                    href="#!"
                                    role="button"
                                    data-twe-ripple-init=""
                                    data-twe-ripple-color="light"
                                >
                                    {/* Facebook */}
                                    <span className="me-2 fill-white [&>svg]:mx-auto [&>svg]:h-3.5 [&>svg]:w-3.5">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                            {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
                                            <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                                        </svg>
                                    </span>
                                    Continue with Facebook
                                </a>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}