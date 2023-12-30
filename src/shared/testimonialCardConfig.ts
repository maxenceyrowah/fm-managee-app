import AliImg from "../assets/images/avatar-ali.png";
import AnishaImg from "../assets/images/avatar-anisha.png";
import RichardImg from "../assets/images/avatar-richard.png";
import ShanaiImg from "../assets/images/avatar-shanai.png";

type TCardOptions = {
  img: string;
  name: string;
  description: string;
};
export const cardOptions: TCardOptions[] = [
  {
    img: AnishaImg,
    name: "Anisha Li",
    description:
      "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”",
  },
  {
    img: AliImg,
    name: "Ali Bravo",
    description:
      "“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”",
  },
  {
    img: RichardImg,
    name: "Richard Watts",
    description:
      "“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”",
  },
  {
    img: ShanaiImg,
    name: "Shanai Gough",
    description:
      "“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”",
  },
];
