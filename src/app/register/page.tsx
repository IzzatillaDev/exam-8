// import { ErrorMessage, Field, Form, Formik } from "formik"
// import Link from "next/link"




// const page = () => {
//   return (
//     <>
//       <Formik
//         initialValues={initialValues}
//         validationSchema={validationRegister}
//         onSubmit={handleSubmit}
//       >
//         <Form>
//           <div className="pt-2">
//             <h2 className='password'>First Name</h2>
//             <Field
//               name="first_name"
//               type="text"
//               placeholder="first_name"
//               className="form-control my-2"
//             />
//             <ErrorMessage
//               className="text-danger"
//               component="div"
//               name="first_name"
//             />
//           </div>

//           <div className="pt-2">
//             <h2 className="password">Last Name</h2>
//             <Field
//               name="last_name"
//               type="text"
//               placeholder="last_name"
//               className="form-control my-2"
//               // innerRef={inputRef}
//             // inputRef={inputRef}
//             />
//             <ErrorMessage
//               className="text-danger"
//               component="div"
//               name="last_name"
//             />
//           </div>

//           <div className="pt-2">
//             <h2 className="password">Phone Number</h2>
//             <Field
//               name="phone_number"
//               type="tel"
//               placeholder="phone_number"
//               className="form-control my-2"
//               inputRef={inputRef}
//             />
//             <ErrorMessage
//               className="text-danger"
//               component="div"
//               name="phone_number"
//             />
//           </div>

//           <div className="pt-2">
//             <h2 className="password">Email</h2>
//             <Field
//               name="email"
//               type="email"
//               placeholder="email"
//               className="form-control my-2"
//               // inputRef={inputRef} 
//             />
//             <ErrorMessage
//               className="text-danger"
//               component="div"
//               name="email"
//             />
//           </div>

//           <div className='relative pt-2' >
//             <h2 className="password">Password</h2>
//             <Field
//               name="password"
//               type={"password"}
//               placeholder="password"
//               className="form-control my-2"
//               helperText={
//                 <ErrorMessage
//                   className="text-danger"
//                   component="div"
//                   name="password"
//                 />
//               }
//             />
//             {/* {showPassword ? <Visibility onClick={() => setSHowPassword(!showPassword)} className='absolute z-10 top-[44px] right-[20px]' />
//               : <VisibilityOff onClick={() => setSHowPassword(!showPassword)} className='absolute z-10 top-[44px] right-[20px]' />} */}
//           </div>

//           <Link href="/login">
//           <button type="submit" className="btn22 w-full text-white mt-4 p-3">
//             To Login
//           </button>
//           </Link>
//         </Form>
//       </Formik>
//     </>
//   )
// }

// export default page