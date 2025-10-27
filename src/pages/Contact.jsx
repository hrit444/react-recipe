import { useForm } from "react-hook-form";
import "./Contact.css";
import { toast } from "react-toastify";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const SubmitHandler = (data) => {
    console.log(data);
    toast.success("Message sent!",{
      position: "bottom-right",
    });
    reset();
  };

  return (
    <div className="contact w-[100vw] bg-[#fbf6ec]">
      <div className="left">
        <h1>Get in touch</h1>
        <div>
          <div className="text">
            <h5>Email:</h5>
            <h4>Recipeinminute@gmail.com</h4>
          </div>
          <div className="text">
            <h5>Phone:</h5>
            <h4>+91 9909909989</h4>
          </div>
          <div className="text">
            <h5>Address:</h5>
            <h4 className="capitalize">
              123 innovation avenue, suite 456 tech district, west bengal, <br className="hidden lg:inline" />india
            </h4>
          </div>
          <div className="text">
            <h5>Follow us:</h5>
            <div className="follow">
              <i className="ri-instagram-fill"></i>
              <i className="ri-facebook-circle-fill"></i>
              <i className="ri-linkedin-box-fill"></i>
              <i className="ri-twitter-x-fill"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <form onSubmit={handleSubmit(SubmitHandler)}>
          <div className="lg:flex lg:justify-between">
            <div>
              <h4>Your Name</h4>
              <input
                {...register("name", {
                  required: "This place can not be empty!",
                })}
                type="text"
                placeholder="Your name"
              />
              <small>{errors?.name?.message}</small>
            </div>
            <div>
              <h4>Email Address:</h4>
              <input
                {...register("email", {
                  required: "This place can not be empty!",
                })}
                type="email"
                placeholder="Your email address"
              />
              <small>{errors?.name?.message}</small>
            </div>
          </div>

          <h4>Message:</h4>
          <textarea
            {...register("description", {
              required: "This place can not be empty!",
            })}
            type="message"
            placeholder="Write something..."
            rows="7"
          ></textarea>
          <small>{errors?.description?.message}</small>

          <button>Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
