"use client";
import { Icon } from "@iconify/react";
import logo from "@/public/logo.png";
import { Button, Form, InputGroup } from "rsuite";
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
          <h1 className={`text-h1 font-semibold`}> Forgot Password</h1>
          <h6 className={`text-xs`}> Enter email adrress to recover password </h6>
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

          <Button
            className="bg-blue-500 hover:bg-blue-700
       text-white font-bold py-2 px-4 rounded-full"
            style={{ width: "100%" }}
          >
            {" "}
            Recover Password {" "}
          </Button>
        </Form>
      </section>
    </>
  );
};
export default page;
