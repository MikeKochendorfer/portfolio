import { NextApiRequest, NextApiResponse } from "next";
import SparkPost from "sparkpost";

export default function contact(req: NextApiRequest, res: NextApiResponse) {
  const client = new SparkPost(process.env.SPARKPOST_API_KEY);

  const body = req.body;
  const { name, email, purpose, description } = body;

  client.transmissions
    .send({
      content: {
        from: `${process.env.SENDER}`,
        subject: `${name} reached out to you on mikek.io`,
        html: `
        <html>
          <body>
            <h1>New Form Submission</h1>
            <p><span>Name: </span>${name}</p>
            <p><span>Email: </span>${email}</p>
            <p><span>Purpose: </span>${purpose}</p>
            <p><span>Description: </span>${description}</p>
          </body>
        </html>`,
      },
      recipients: [
        {
          address: `${process.env.RECIPIENT}`,
        },
      ],
    })
    .then((data) => {
      if (data.results.total_accepted_recipients > 0) res.status(200);
      if (data.results.total_rejected_recipients > 0) res.status(500);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
    });
  res.end();
}
