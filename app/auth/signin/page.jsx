"use client";
import { Icon } from "@iconify/react";
import logo from "@/public/logo.png";
import { Button, Checkbox, Form, InputGroup } from "rsuite";
import Link from "next/link";
import ImagesWrapper from "@/app/component/Imagewrapper";
import { fn } from "@/utils/utilityfunctions";

const page = () => {
  return (
    <>
      <section>
        {/* header */}

        <div className={`text-center flex flex-col items-center`}>
          <ImagesWrapper
            src={logo}
            alt={`logo`}
            width={fn.rem(100)}
            height={fn.rem(100)}
            objectFit={`contain`}
          />
          <h1 className={`text-h1 font-semibold`}> Welcome to EM</h1>
          <h6 className={`text-h6`}> sign in to your account </h6>
        </div>
        {/* form email */}

        <Form style={{ maxWidth: "300px", margin: "0 auto" }}>
          <Form.Group controlId={"input-1"}>
            <InputGroup inside>
              <InputGroup.Addon>
                <Icon icon="majesticons:mail" style={{ color: "blue" }} />
              </InputGroup.Addon>
              <Form.Control name="input-1" placeholder="Email" />
            </InputGroup>
          </Form.Group>

          {/* form password */}
          <Form.Group controlId={"input-1"}>
            <InputGroup inside>
              <InputGroup.Addon>
                <Icon icon="uis:padlock" style={{ color: "blue" }} />
              </InputGroup.Addon>
              <Form.Control name="input-1" placeholder="Password" />
            </InputGroup>
          </Form.Group>

          <div className={`text-xs`}>
            <Checkbox> Keep me signed in </Checkbox>
            <Link href={`/auth/forgotpassword`} className={`text-emBlue font-bold`}>
                forgot password?
              </Link>
          </div>

          <Button
            className="bg-blue-500 hover:bg-blue-700
       text-white font-bold py-2 px-4 rounded-full"
            style={{ width: "100%" }}
          >
            {" "}
            Sign Up{" "}
          </Button>
          <div className={`w-full text-xs`}>
            <p className={`my-3`}>
              Dont have an account yet?{" "}
              <Link href={`/auth/signup`} className={`text-emBlue font-bold`}>
                Sign Up
              </Link>
            </p>
            <p className={`text-emGrey`}>
              By signing up you accept our Privacy Policy, Terms & Licensing
              Agreement. Protected by reCAPTCHA. Google Privacy Policy & Terms
              apply.
            </p>
          </div>
        </Form>
      </section>
    </>
  );
};
export default page;
