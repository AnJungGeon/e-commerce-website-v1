import React from "react";
import {RiGithubFill, RiGoogleFill} from "@remixicon/react";

export default function Login() {
    return <>
        <section className="min-h-svh flex items-center justify-center
        py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md bg-white rounded-2xl
            shadow-lg overflow-hidden p-8 sm:p-10">
                {/*logo               */}
                <span className="text-2xl font-semibold text-amber-600 font-cunia text-center block">
                    FurniHub
                </span>
                {/*Form*/}
                <div className="space-y-8">
                    {/*title*/}
                    <div className="text-center space-y-2 mt-5">
                        <h2 className="text-3xl lg:text-4xl text-neutral-800">WelCome Bak</h2>
                        <p className="text-gray-600">
                            aaaaaaaaaaaaaaaaa
                        </p>
                    </div>
                    {/*Form*/}
                    <form action="" className="space-y-6">
                        {/*wrapper*/}
                        <div className="space-y-6">
                            {/*Email field*/}
                            <div>
                                <label htmlFor="" className="block text-sm font-medium text-gray-700 mb-2">Email address</label>
                                <input type="email"
                                       placeholder="이메일 입력해라"
                                       id="email"
                                       className="w-full px-4 py-3 border border-gray-300 rounded-lg
                                        focus:ring-amber-600 focus:ring-2 outline-none transition-colors"/>
                            </div>
                            {/*Password field*/}
                            <div className="">
                                <label htmlFor="" className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                                <input type="password" placeholder="비번 좀...."
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg
                                        focus:ring-amber-600 focus:ring-2 outline-none transition-colors"/>
                            </div>
                        </div>

                        {/*wrapper*/}
                        <div className="flex items-center justify-between
                        flex-wrap gap-5">
                            <div className="flex items-center gap-2">
                                <input type="checkbox"
                                       id="checkbox"
                                       className="size-4 text-amber-600
                                focus:ring-amber-600 border-gray-300 rounded
                                accent-amber-600"/>
                                <label htmlFor="checkbox" className="block
                                text-sm text-gray-700">Remember me</label>
                            </div>

                            {/*link*/}
                            <a href="#" className="text-sm text-amber-600
                            hover:text-amber-700 transition-colors">Forgot Password?</a>
                        </div>
                        
                        {/*btn*/}
                        <button className="btn-primary w-full py-3 text-lg">Sign in</button>
                    </form>

                    {/*divider*/}
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"/>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-amber-50 text-gray-500">Or continue with</span>
                        </div>
                    </div>

                    {/*Social login buttons*/}
                    <div className="grid gap-4 grid-cols-2">
                        <button className="w-full inline-flex
                        justify-center items-center gap-2 px-4 py-3 border border-gray-300 rounded-lg
                        bg-white text-gray-700
                        hover:bg-gray-50 transition-all">
                            <span>
                                <RiGoogleFill/>
                            </span>
                            Google
                        </button>
                        <button className="w-full inline-flex
                        justify-center items-center gap-2 px-4 py-3 border border-gray-300 rounded-lg
                        bg-white text-gray-700
                        hover:bg-gray-50 transition-all">
                            <span>
                                <RiGithubFill/>
                            </span>
                            GitHub
                        </button>
                    </div>


                    {/*Sing Up Link*/}
                    <div className="text-center text-sm gap-2 flex
                    justify-center flex-wrap">
                        <span className="text-gray-600 block">Don&#39;t have an account?</span>
                        <a href="#" className="text-amber-600 hover:text-amber-700
                        focus:text-amber-700 hover:underline
                        transition-colors">Sign up</a>
                    </div>
                </div>
            </div>
        </section>
    </>
}