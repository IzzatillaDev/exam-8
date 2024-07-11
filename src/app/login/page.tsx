"use client"
import { login } from "../../../service/auth.service"
import { useRouter } from "next/navigation"
import { Input } from 'antd';
import Notification from "../../../utils/utils";
import { ToastContainer } from "react-toastify";
import { useMask } from "@react-input/mask";

import "./style.css"
import Link from "next/link";
import { saveAccessToken } from "@/components/helpers/auth-helpers";


const page = () => {
  const inputRef = useMask({
    mask: "+998 (__) ___-__-__",
    replacement: { _: /\d/ },
  })

  const router = useRouter()
  const submit = async (form: FormData) => {
    const payload = {
      phone_number: form.get("phone"),
      password: form.get("password")
    }
    console.log(payload)
    const status = await login(payload)
    
    if (status === 201) {
      Notification({ title: "Successufully", type: "default" })
      setTimeout(() => {
        router.push("/")
      }, 1500);
    }
  }
  return (
    <>
      <ToastContainer />
      <section className="register">
        <div className="container">
          <h2 className="register_title">Login</h2>
          <div className="forms">
            <form action={submit} className="form">

              <div>
                <h2 className="phone">Phone Number</h2>
                <Input name="phone" className="phone_input" type="tel" placeholder="Phone" />
              </div>

              <div>
                <h2 className="password">Password</h2>
                <Input name="password" className="password_input" type="password" placeholder="Password" />
              </div>
              <button type="submit" className="btn">Submit</button>
              {/* <Link href="/register">
                <div>
                  <h2 className="to_register">Register</h2>
                </div>
              </Link> */}


            </form>
          </div>

        </div>

      </section>
    </>
  )
}

export default page