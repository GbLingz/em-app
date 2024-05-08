'use client'
import React from "react";
import ImagesWrapper from "../../component/imagewrapper";
import { Button, Container, Form, InputGroup } from "rsuite";
import { Icon } from "@iconify/react";
import logo from '@/public/logo.png'
import { fn } from "@/utils/utilityfunctions";
import Link from "next/link";

const page = () => {
  return (
    <section>
      {/* header */}

      <div className= {`text-center flex flex-col items-center`} >
        <ImagesWrapper src={logo} alt={`logo`} width={fn.rem(100)} height={fn.rem(100)}
        objectFit={`contain`} />
        <h1 className={`text-h1 font-semibold`}> Welcome to EM</h1>
        <h6 className={`text-h6`}> sign up for free </h6>
      </div>
      {/* form email */}
      <Container>

      <Form style={{ maxWidth: "300px", margin: "0 auto" }}>
        <Form.Group controlId={"input-1"}>
          <InputGroup inside>
            <InputGroup.Addon>
            <Icon icon="majesticons:mail" style={{ color: "blue" }} />
            </InputGroup.Addon>
            <Form.Control
              name="input-1"
              placeholder="Email"
              />
          </InputGroup>
        </Form.Group>
     

            {/* form username */}
        <Form.Group controlId={"input-1"}>
          <InputGroup inside>
            <InputGroup.Addon>
            <Icon icon="fluent-mdl2:contact" style={{ color: "blue" }}/>
            </InputGroup.Addon>
            <Form.Control
              name="input-1"
              placeholder="Username"
              />
          </InputGroup>
        </Form.Group>
  

       {/* form password */}
        <Form.Group controlId={"input-1"}>
          <InputGroup inside>
            <InputGroup.Addon>
            <Icon icon="uis:padlock" style={{ color: "blue" }} />
            </InputGroup.Addon>
            <Form.Control
              name="input-1"
              placeholder="Password"
              />
          </InputGroup>
        </Form.Group>
     
             {/* form confirm password */}
        <Form.Group controlId={"input-1"}>
          <InputGroup inside>
            <InputGroup.Addon>
            <Icon icon="uis:padlock" style={{ color: "blue" }}/>
            </InputGroup.Addon>
            <Form.Control
              name="input-1"
              placeholder="Confirm Password"
              />
          </InputGroup>
        </Form.Group>

      <Button className="bg-blue-500 hover:bg-blue-700
       text-white font-bold py-2 px-4 rounded-full" style={{ width: "100%" }}> Sign Up </Button>
       <div className={`w-full text-xs`}>
                    <p className={`my-3`}>
                        Alreaday have an account?{" "}
                        <Link href={`/auth/signin`} className={`text-emBlue font-bold`}>
                            Sign In
                        </Link>
                    </p>
                    <p className={`text-emGrey`}>
                        By signing up you accept our Privacy Policy, Terms & Licensing Agreement. Protected by reCAPTCHA. Google Privacy Policy & Terms apply.
                    </p>
                </div>
        </Form>
       </Container>



       

    </section>
    
  );
};

export default page;
