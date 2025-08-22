import {
  GraduationCap,
  Handshake,
  HeartHandshakeIcon,
  MessageCircleMore,
  PenOff,
  ShieldCheck,
  UserSearch,
  Waypoints,
  Zap,
} from "lucide-react";

export const trustIndicatorsData = [
  {
    value: "1000+",
    label: "Sessions Completed",
    color: "text-purple-600",
    badge: "Popular",
  },
  {
    value: "4.9★",
    label: "Average Rating",
    color: "text-blue-600",
    badge: "Rated",
  },
  {
    value: "50+",
    label: "Trained Listeners",
    color: "text-green-600",
    badge: "Expert",
  },
  {
    value: "24/7",
    label: "Support Available",
    color: "text-orange-600",
    badge: "Always On",
  },
];

export const howItWorksData = [
  {
    // icon: "👋",
    icon: <Handshake />,
    iconBg: "bg-blue-100",
    title: "Sign Up Anonymously",
    description:
      "Create your account with just an email. No real names required. Your identity stays completely private.",
  },
  {
    // icon: "🎯",
    icon: <UserSearch />,
    iconBg: "bg-green-100",
    title: "Choose Your Listener",
    description:
      "Browse our trained listeners or let us match you with someone perfect for your needs.",
  },
  {
    // icon: "💬",
    icon: <MessageCircleMore />,
    iconBg: "bg-purple-100",
    title: "Start Your Session",
    description:
      "Connect via text, audio, or video. Share freely in a judgment-free environment.",
  },
];

// export const homePageData = {
//   hero: {
//     title: "Anonymous Mental Health Support",
//     subtitle:
//       "Connect with trained listeners in a safe, judgment-free space",
//   },
//   trustIndicators: trustIndicatorsData,
//   howItWorks: howItWorksData,
//   features: [
//     {
//       icon: "🔒",
//       title: "100% Anonymous",
//       description: "Your privacy is our priority",
//     },
//     {
//       icon: "🧠",
//       title: "24/7 Available",
//       description: "Certified mental health supporters",
//     },
//     {
//       icon: "🕐",
//       title: "Trained Listeners",
//       description: "Support when you need it most",
//     },
//   ],
// };

export const features = [
  {
    icon: <ShieldCheck className="text-blue-600" />,
    iconBg: "bg-blue-100",
    title: "Complete Privacy",
    description:
      "End-to-end encryption ensures your conversations stay between you and your listener.",
  },
  {
    icon: <GraduationCap className="text-green-600" />,
    iconBg: "bg-green-100",
    title: "Trained Listeners",
    description:
      "All our listeners complete rigorous training in active listening and emotional support.",
  },
  {
    icon: <Zap className="text-purple-600" />,
    iconBg: "bg-purple-100",
    title: "Instant Access",
    description:
      "Book sessions immediately or schedule for later. Support when you need it most.",
  },
  {
    icon: <PenOff className="text-yellow-600" />,
    iconBg: "bg-yellow-100",
    title: "No Judgment Zone",
    description:
      "Share anything on your mind without fear of criticism or unsolicited advice.",
  },
  {
    icon: <HeartHandshakeIcon className="text-red-600" />,
    iconBg: "bg-red-100",
    title: "Affordable Support",
    description:
      "Quality emotional support that doesn't break the bank. Starting at just $15.",
  },
  {
    icon: <Waypoints className="text-indigo-600" />,
    iconBg: "bg-indigo-100",
    title: "Multiple Ways to Connect",
    description:
      "Choose text, audio, or video sessions based on your comfort level.",
  },
];
