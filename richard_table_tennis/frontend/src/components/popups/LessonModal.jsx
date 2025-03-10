import { Modal, Button, TextInput, Textarea } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { updateClicked } from "../../utility/fetchLessons";
import { useForm } from "@mantine/form";
import { useContext, useEffect, useState } from "react";
import { userContext } from "../../contexts/UserContext";
import { DateInput } from "@mantine/dates";
import { submitInquiry } from "../../utility/training";
import SuccessNotif from "./SuccessNotif";
import InvalidNotif from "./InvalidNotif";
import { useNavigate } from "react-router-dom";

function LessonModal({ data }) {
  const [opened, { open, close }] = useDisclosure(false);
  const { user } = useContext(userContext);
  const [invalid, setInvalid] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      date: "",
      text: "",
    },
  });

  useEffect(() => {
    if (user) {
      form.setValues({
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
      });
    }
  }, [opened]);

  async function btnClicked() {
    if (!user) {
      navigate("/login", { replace: true });
    }
    try {
      await updateClicked(data._id);
    } catch (err) {
      console.log(err.message);
    }
  }

  async function handleSubmit(values) {
    try {
      const htmlContent = `
      <html>
        <body>
          <h1>Inquiry Confirmation</h1>
          <p>Dear ${values.firstname} ${values.lastname},</p>
          <p>Thank you for expressing your interest to learn from us. We will attempt to arrange a suitable time for you on this day.</p>
          
          <h3>Inquiry Details:</h3>
          <ul>
            <li><strong>Email:</strong> ${values.email}</li>
            <li><strong>Date:</strong> ${values.date}</li>
          </ul>
          <br>
          <h3>What would you like to improve?</h3>
          <p>${values.text}</p>
          <br>
          <p>If you have any other questions, feel free to contact us.</p>
    
          <footer>
            <p>Thanks for learning table tennis at Richard TT.</p>
            <p>Best regards,</p>
            <p>Richard and friends</p>
          </footer>
        </body>
      </html>
    `;

      data = {
        recipient: user.email,
        subject: `Scheduling coaching for ${values.firstname} ${values.lastname}`,
        html: htmlContent,
      };

      const result = await submitInquiry(data);

      if (result.success) {
        setSuccess(true);
      } else {
        setInvalid(true);
      }

      setTimeout(() => {
        close();
      }, 700);
    } catch (err) {
      console.log(err.message);
    }
  }
  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title={`Book with  ${data.coach} now!`}
        pos={"relative"}
      >
        <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
          <TextInput
            withAsterisk
            label="First name"
            placeholder="First name"
            key={form.key("firstname")}
            {...form.getInputProps("firstname")}
          />
          <TextInput
            withAsterisk
            label="Last Name"
            placeholder="last name"
            key={form.key("lastname")}
            {...form.getInputProps("lastname")}
          />
          <TextInput
            withAsterisk
            label="Email"
            placeholder="email"
            key={form.key("email")}
            {...form.getInputProps("email")}
          />
          <DateInput
            withAsterisk
            clearable
            key={form.key("date")}
            {...form.getInputProps("date")}
            label={"Choose a date"}
            placeholder="Choose a date"
          />
          <Textarea
            size="md"
            radius="md"
            label="What do you want to improve on?"
            placeholder="tell us what you want to improve on"
            key={form.key("text")}
            {...form.getInputProps("text")}
            resize="vertical"
          />

          <Button
            variant="gradient"
            gradient={{ from: "blue", to: "cyan", deg: 90 }}
            mt={20}
            type="submit"
          >
            Schedule now
          </Button>
        </form>
        {success && (
          <SuccessNotif
            close={() => {
              setSuccess(false);
            }}
            title={"Booking successfully sent"}
            reason={"Keep on training!"}
          />
        )}
        {invalid && (
          <InvalidNotif
            close={() => {
              setInvalid(false);
            }}
            title={"Booking was not successful"}
            reason={"Try again"}
          />
        )}
      </Modal>

      <Button
        color="blue"
        radius="lg"
        flex="1"
        onClick={() => {
          btnClicked();
          open();
        }}
      >
        {data.coach === "No coach"
          ? "Inquire now"
          : `Inquire about ${data.coach}`}
      </Button>
    </>
  );
}
export default LessonModal;
