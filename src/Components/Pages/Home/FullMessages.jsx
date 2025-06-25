import backgroudphoto from "../../../../public/images/tree.jpg";
import bean from "../../../../public/images/user-4.jpg";

const fullMessages = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${backgroudphoto})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "350px",
          marginTop: "30px",
        }}
        className="flex justify-center"
      >
        {/* title tag */}
        <div className="bg-black opacity-70 w-full h-full flex flex-col justify-center items-center">
          <h1
            style={{ fontFamily: "Mooli, sans-serif" }}
            className="text-3xl text-white font-semibold "
          >
            Principle Message
          </h1>
          <img
            className="w-[400px] h-[50px]"
            src="../../../../public/icons/hrLine.png"
            alt=""
          />
        </div>
      </div>

      {/* information section  */}
      <div className=" max-w-screen-xl mx-auto mt-10">
        <div className="flex">
          <div>
            <img
              className="w-[300px] h-[300px] rounded-full pt-3 px-3 "
              src={bean}
              alt=""
            />
          </div>
          <div className="ms-5">
            <h1
              style={{ fontFamily: "Young Serif, serif" }}
              className="my-3 text-xl"
            >
              Professor Dr. Rowan Atkinson
            </h1>
            <p style={{ fontFamily: "Young Serif, serif" }}>
              A.B.C School and College
            </p>
          </div>
        </div>
        <div style={{ fontFamily: 'Mooli, sans-serif' }} className="sm: me-2 sm: ms-2 my-10">
          <h1
            style={{ fontFamily: "Young Serif, serif" }}
            className="text-3xl "
          >
            Message
          </h1>
          <p  className="text-lg mt-5">
            Welcome to A.B.C School and College, where excellence in education is
            our guiding principle. Our institution is dedicated to nurturing
            young minds, fostering creativity, and instilling a passion for
            lifelong learning. At Mayer Dua, we believe in a holistic approach to
            education that goes beyond textbooks, emphasizing character
            development, critical thinking, and leadership skills. Our committed
            faculty and staff work tirelessly to create a supportive and
            inclusive learning environment, where every student can thrive and
            reach their full potential <br />
            We are proud of our legacy of academic achievement, but we are
            equally committed to promoting values of respect, empathy, and
            social responsibility. Our aim is to empower our students to become
            not just academically successful, but also responsible citizens of
            the world. As you explore our website, you'll discover the various
            programs, activities, and opportunities that define the Mayer Dua
            experience. We encourage you to join us on this journey of
            education, growth, and transformation. Thank you for visiting our
            website, and we look forward to welcoming you into the Mayer Dua family.{" "}
          </p>
          <p className="text-lg">
            Welcome to A.B.C School and College, where excellence in education is
            our guiding principle. Our institution is dedicated to nurturing
            young minds, fostering creativity, and instilling a passion for
            lifelong learning. At Mayer Dua, we believe in a holistic approach to
            education that goes beyond textbooks, emphasizing character
            development, critical thinking, and leadership skills. Our committed
            faculty and staff work tirelessly to create a supportive and
            inclusive learning environment, where every student can thrive and
            reach their full potential <br />
            We are proud of our legacy of academic achievement, but we are
            equally committed to promoting values of respect, empathy, and
            social responsibility. Our aim is to empower our students to become
            not just academically successful, but also responsible citizens of
            the world. As you explore our website, you'll discover the various
            programs, activities, and opportunities that define the Mayer Dua
            experience. We encourage you to join us on this journey of
            education, growth, and transformation. Thank you for visiting our
            website, and we look forward to welcoming you into the Mayer Dua family.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default fullMessages;
