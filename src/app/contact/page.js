import Footer from "@/components/Footer";
import React from "react";

const Contact = () => {
  return (
    <>
      <div className="mt-16">
        <main>
          <div className="flex items-center justify-center">
            <div className="w-96 h-auto shadow-md p-5 rounded-md">
              <h1 className="text-2xl mb-4">Contact Us</h1>
              <div className="">
                <div className="mb-2 min-w-full">
                  <input
                    type="text"
                    placeholder="Input you name"
                    className="input input-bordered input-accent min-w-full max-w-xs"
                  />
                </div>
                <div className="mb-2 min-w-full">
                  <input
                    type="text"
                    placeholder="Enter you email"
                    className="input input-bordered input-accent min-w-full max-w-xs"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    placeholder="Input your website"
                    className="input input-bordered input-accent min-w-full max-w-xs"
                  />
                </div>

                <textarea
                  className="textarea textarea-accent mb-2 w-full"
                  placeholder="Input you message"
                ></textarea>

                <button className="btn btn-primary w-1/2">Send</button>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div className="w-full fixed text-center bottom-0">
        <Footer />
      </div>
    </>
  );
};

export default Contact;
