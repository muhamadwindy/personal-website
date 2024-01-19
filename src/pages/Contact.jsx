import {
  Card,
  Input,
  Button,
  Typography,
  Textarea,
} from "@material-tailwind/react";

export default function ContactPage() {
  return (
    <Card color="transparent" shadow={false}>
      <div className="text-center">
        <Typography variant="h4" color="text-center blue-gray">
          Contact
        </Typography>
      </div>
      <Typography color="gray" className="mt-1 font-normal text-center">
        Nice to meet you! Enter your details.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 mx-auto">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Subject
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Message
          </Typography>
          <Textarea
            type="text"
            size="lg"
            placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>

        <Button className="mt-6 normal-case" fullWidth>
          Submit
        </Button>
      </form>
    </Card>
  );
}
