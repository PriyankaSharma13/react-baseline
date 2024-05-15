/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";

const frontendSkills = [
  {
    title: "javascript",
    imgUrl: "https://i.ibb.co/BBdmT1T/javascript.png",
    id: 1,
  },
  {
    title: "react",
    imgUrl: "https://i.ibb.co/RhRhpPx/react.png",
    id: 2,
  },
  {
    title: "framer",
    imgUrl: "https://i.ibb.co/BstztVb/framer.png",
    id: 3,
  },
  {
    title: "sass",
    imgUrl: "https://i.ibb.co/x7DH0yr/sass.png",
    id: 4,
  },
  {
    title: "vue",
    imgUrl: "https://i.ibb.co/wYCXfJt/vuejs.png",
    id: 5,
  },
  {
    title: "typescript",
    imgUrl: "https://i.ibb.co/4PmsWZQ/typescript.png",
    id: 6,
  },
];

const backendSkills = [
  {
    title: "php",
    imgUrl: "https://i.ibb.co/kKgvPrc/php.png",
    id: 1,
  },
  {
    title: "mysql",
    imgUrl: "https://i.ibb.co/fMgzkKT/mysql.png",
    id: 2,
  },
  {
    title: "laravel",
    imgUrl: "https://i.ibb.co/Dg1CFxg/laravel-framework-logo.png",
    id: 3,
  },
  {
    title: "nodejs",
    imgUrl: "https://i.ibb.co/r48pPS5/nodejs.png",
    id: 4,
  },
  {
    title: "rust",
    imgUrl: "https://i.ibb.co/Y79fZHz/rust.png",
    id: 5,
  },
  {
    title: "typescript",
    imgUrl: "https://i.ibb.co/4PmsWZQ/typescript.png",
    id: 6,
  },
];
const marketingSkills = [
  {
    title: "instagram",
    imgUrl: "https://i.ibb.co/vxzLKBH/instagram-marketing.png",
    id: 1,
  },
  {
    title: "seo",
    imgUrl: "https://i.ibb.co/8xXYq3M/seo-board.png",
    id: 2,
  },
  {
    title: "facebook",
    imgUrl: "https://i.ibb.co/ZM2GbQN/social-media-facebook-marketing.png",
    id: 3,
  },
  {
    title: "youtube",
    imgUrl: "https://i.ibb.co/9VdC3bS/social-media-marketing-in-mobile-online.png",
    id: 4,
  },
  {
    title: "twitter",
    imgUrl: "https://i.ibb.co/723DHZF/twitter-marketing.png",
    id: 5,
  },
  {
    title: "whatsapp",
    imgUrl: "https://i.ibb.co/vjk2yWQ/whatsapp-marketing.png",
    id: 6,
  },
];

const features = [
  {
    name: "Web Development",
    href: "#",
    description:
      "Get a better understanding of where your traffic is coming from.",
    icon: ChartBarIcon,
  },
  {
    name: "Web Designing",
    href: "#",
    description: "Speak directly to your customers in a more meaningful way.",
    icon: CursorClickIcon,
  },
  {
    name: "Digital Marketing",
    href: "#",
    description: "Your customers' data will be safe and secure.",
    icon: ShieldCheckIcon,
  },
  {
    name: "SEO",
    href: "#",
    description: "Connect with third-party tools that you're already using.",
    icon: ViewGridIcon,
  },
  {
    name: "UI/UX",
    href: "#",
    description:
      "Build strategic funnels that will drive your customers to convert",
    icon: RefreshIcon,
  },
];
const callsToAction = [
  { name: "Watch Demo", href: "#", icon: PlayIcon },
  { name: "Contact Sales", href: "#", icon: PhoneIcon },
];
const resources = [
  {
    name: "Help Center",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "#",
    icon: SupportIcon,
  },
  {
    name: "Guides",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "#",
    icon: BookmarkAltIcon,
  },
  {
    name: "Events",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "#",
    icon: CalendarIcon,
  },
  {
    name: "Security",
    description: "Understand how we take your privacy seriously.",
    href: "#",
    icon: ShieldCheckIcon,
  },
];
const recentPosts = [
  { id: 1, name: "Boost your conversion rate", href: "#" },
  {
    id: 2,
    name: "How to use search engine optimization to drive traffic to your site",
    href: "#",
  },
  { id: 3, name: "Improve your customer experience", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function HeroPage() {
  return (
    <div className="relative bg-gray-50">
      <Popover className="relative bg-white">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-6 ">
              <div className="flex justify-between items-center py-2">
                <div className="flex justify-start">
                  <a href="#">
                    <span className="sr-only">Workflow</span>
                    <img
                      className="w-[120px] h-16"
                      src="https://i.ibb.co/3YnGc6x/new-logo1.png"
                      alt="logo"
                    />
                  </a>
                </div>
                <div className="-mr-2 -my-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-400">
                    <span className="sr-only">Open menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
                <Popover.Group as="nav" className="hidden space-x-10">
                  <Popover className="relative">
                    {({ open }) => (
                      <>
                        <Popover.Button
                          className={classNames(
                            open ? "text-gray-900" : "text-gray-500",
                            "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          )}
                        >
                          <span>Solutions</span>
                          <ChevronDownIcon
                            className={classNames(
                              open ? "text-gray-600" : "text-gray-400",
                              "ml-2 h-5 w-5 group-hover:text-gray-500"
                            )}
                            aria-hidden="true"
                          />
                        </Popover.Button>

                        <Transition
                          show={open}
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel
                            static
                            className="absolute -ml-4 mt-3 transform z-10 w-screen max-w-md px-0"
                          >
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                              <div className="relative grid bg-white px-5 py-6 gap-4 p-8">
                                {features.map((item) => (
                                  <a
                                    key={item.name}
                                    href={item.href}
                                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                  >
                                    <item.icon
                                      className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                      aria-hidden="true"
                                    />
                                    <div className="ml-4">
                                      <p className="text-base font-medium text-gray-900">
                                        {item.name}
                                      </p>
                                      <p className="mt-1 text-sm text-gray-500">
                                        {item.description}
                                      </p>
                                    </div>
                                  </a>
                                ))}
                              </div>
                              <div className="py-5 bg-gray-50 flex space-y-0 space-x-10 px-8">
                                {callsToAction.map((item) => (
                                  <div key={item.name} className="flow-root">
                                    <a
                                      href={item.href}
                                      className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                                    >
                                      <item.icon
                                        className="flex-shrink-0 h-6 w-6 text-gray-400"
                                        aria-hidden="true"
                                      />
                                      <span className="ml-3">{item.name}</span>
                                    </a>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>

                  <a
                    href="#"
                    className="text-base font-medium text-gray-500 hover:text-gray-900"
                  >
                    Pricing
                  </a>
                  <a
                    href="#"
                    className="text-base font-medium text-gray-500 hover:text-gray-900"
                  >
                    Docs
                  </a>

                  <Popover className="relative">
                    {({ open }) => (
                      <>
                        <Popover.Button
                          className={classNames(
                            open ? "text-gray-900" : "text-gray-500",
                            "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          )}
                        >
                          <span>More</span>
                          <ChevronDownIcon
                            className={classNames(
                              open ? "text-gray-600" : "text-gray-400",
                              "ml-2 h-5 w-5 group-hover:text-gray-500"
                            )}
                            aria-hidden="true"
                          />
                        </Popover.Button>

                        <Transition
                          show={open}
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel
                            static
                            className="absolute left-1/2 z-10 transform -translate-x-1/2 mt-3 w-screen max-w-md px-0"
                          >
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                              <div className="relative grid bg-white px-5 py-6 gap-8 p-8">
                                {resources.map((item) => (
                                  <a
                                    key={item.name}
                                    href={item.href}
                                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                  >
                                    <item.icon
                                      className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                      aria-hidden="true"
                                    />
                                    <div className="ml-4">
                                      <p className="text-base font-medium text-gray-900">
                                        {item.name}
                                      </p>
                                      <p className="mt-1 text-sm text-gray-500">
                                        {item.description}
                                      </p>
                                    </div>
                                  </a>
                                ))}
                              </div>
                              <div className="bg-gray-50 px-8 py-8">
                                <div>
                                  <h3 className="text-sm tracking-wide font-medium text-gray-500 uppercase">
                                    Recent Posts
                                  </h3>
                                  <ul className="mt-4 space-y-4">
                                    {recentPosts.map((item) => (
                                      <li
                                        key={item.id}
                                        className="text-base truncate"
                                      >
                                        <a
                                          href={item.href}
                                          className="font-medium text-gray-900 hover:text-gray-700"
                                        >
                                          {item.name}
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div className="mt-5 text-sm">
                                  <a
                                    href="#"
                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                  >
                                    {" "}
                                    View all posts{" "}
                                    <span aria-hidden="true">&rarr;</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                </Popover.Group>
                <div className="hidden items-center justify-end">
                  <a
                    href="#"
                    className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                    style={{color: 'rgb(241, 214, 37)'}}
                  >
                    Sign in
                  </a>
                  <a
                    href="#"
                    className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Sign up
                  </a>
                </div>
              </div>
            </div>

            <Transition
              show={open}
              as={Fragment}
              enter="duration-200 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                static
                className="absolute top-0 inset-x-0 z-10 p-2 transition transform origin-top-right"
              >
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50 h-[212px] w-[330px] overflow-y-scroll">
                  <div className=" pb-6 px-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <img
                          className="h-18 w-[120px]"
                          src="https://i.ibb.co/3YnGc6x/new-logo1.png"
                          alt="Workflow"
                        />
                      </div>
                      <div className="-mr-2">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-yellow-400 focus:outline-none focus:ring-inset focus:ring-yellow-400">
                          <span className="sr-only">Close menu</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div>
                      <nav className="grid gap-y-3">
                        {features.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                          >
                            <item.icon
                              className="flex-shrink-0 h-6 w-6"
                              aria-hidden="true"
                              style={{color: 'rgb(241, 214, 37)'}}
                            />
                            <span className="ml-3 text-base font-medium text-gray-900">
                              {item.name}
                            </span>
                          </a>
                        ))}
                      </nav>
                    </div>
                  </div>
                  <div className="py-6 px-5 space-y-6">
                    <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                      <a
                        href="#"
                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                      >
                        Pricing
                      </a>

                      <a
                        href="#"
                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                      >
                        Docs
                      </a>
                      {resources.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="text-base font-medium text-gray-900 hover:text-gray-700"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                    <div>
                      <a
                        href="#"
                        className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white"
                        style={{background: 'rgb(241, 214, 37)'}}
                      >
                        Sign up
                      </a>
                      <p className="mt-6 text-center text-base font-medium text-gray-500">
                        Existing customer?
                        <a
                          href="#"
                          className="hover:text-indigo-500"
                          style={{color: 'rgb(241, 214, 37)'}}
                        >
                          Sign in
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>

      <main className="max-h-[140px] w-[340px] overflow-y-scroll pt-5">
        <div className="mx-auto max-w-7xl w-full text-center">
          <div className="px-4">
            <h1 className="tracking-tight font-extrabold text-gray-900">
              <span className="block text-lg font-bold" style={{color: ' rgb(241, 214, 37)'}}>
                Who We Are
              </span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-gray-500 text-sm">
              Welcome to Baseline IT Development, where we blend innovation and
              expertise to craft tailored digital solutions. From responsive web
              design to custom applications, we're here to bring your vision to
              life."
            </p>
            <div>
              <h2 className="mt-6 text-xl font-bold" style={{color: 'rgb(241, 214, 37)'}}>Our Frontend Stack</h2>
              <div className="mt-4 grid grid-cols-2 gap-x-2 gap-y-5 mb-8">
                {frontendSkills.map((item, index) => {
                  return (
                    <div
                      className="rounded-md shadow-md mt-0 ml-3 p-4"
                      key={item.id}
                    >
                      <img src={item.imgUrl} alt={item.title}/>
                      <p className="uppercase mt-2">{item.title}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <h2 className="mt-6 text-xl" style={{color: 'rgb(241, 214, 37)'}}>Our Backend Stack</h2>
              <div className="mt-4 grid grid-cols-2 gap-x-2 gap-y-5 mb-8">
                {backendSkills.map((item, index) => {
                  return (
                    <div
                      className="rounded-md shadow-md mt-0 ml-3 p-4"
                      key={item.id}
                    >
                      <img src={item.imgUrl} alt={item.title} />
                      <p className="uppercase mt-2">{item.title}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <p>Apart from web designing and web development we also work on digital marketing and seo stuff</p>
              <h2 className="mt-6 text-xl" style={{color: 'rgb(241, 214, 37)'}}>Our Digital Marketing Stack</h2>
              <div className="mt-4 grid grid-cols-2 gap-x-2 gap-y-5 mb-8">
                {marketingSkills.map((item, index) => {
                  return (
                    <div
                      className="rounded-md shadow-md mt-0 ml-3 p-4"
                      key={item.id}
                    >
                      <img src={item.imgUrl} alt={item.title} className="w-[90px] h-[90px]" />
                      <p className="uppercase mt-2">{item.title}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-72">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
            alt=""
          />
        </div>
      </main>
    </div>
  );
}
