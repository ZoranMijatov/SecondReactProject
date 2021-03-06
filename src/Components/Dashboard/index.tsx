import { DashboardWrapper } from "./style";
import { StyledNavLink } from "../NavLink/style";
import { Li } from "../Li/style";
import { Ul } from "../Ul/style";
import { Button } from "../Button/style";

const Dashboard = () => {
  return (
    <DashboardWrapper>
      <Ul>
        <Li>
          <Button>
            <svg
              style={{ flexShrink: 0 }}
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 512 512"
              fill="#fff"
            >
              <path d="M54 17.9c-18.3 5.9-31 18.8-36.4 37C16.2 59.7 16 68.4 16 124c0 55.6.2 64.3 1.6 69.1 5.5 18.5 18.8 31.8 37.3 37.3 4.8 1.4 14.8 1.6 86 1.6 78.7 0 80.7-.1 83.9-2 1.8-1.1 4.1-3.4 5.2-5.2 1.9-3.2 2-5.2 2-83.9 0-71.2-.2-81.2-1.6-86-5.5-18.5-18.8-31.8-37.3-37.3-4.8-1.4-13.4-1.6-69.5-1.5-58.6 0-64.6.2-69.6 1.8zm133.5 32.8c4.6 2.4 7.5 5.4 10.1 10.3 1.8 3.3 1.9 7.3 2.2 71.3l.3 67.8-67.8-.3c-64-.3-68-.4-71.3-2.2-4.9-2.6-7.9-5.5-10.3-10.1-2.2-4-2.2-4.5-2.2-63.5 0-56.2.1-59.7 1.9-63C54 54.2 58.9 50.4 66 48.9c1.9-.4 29.1-.6 60.5-.6 56.3.2 57 .2 61 2.4zM318 17.9c-18.3 5.9-31 18.8-36.4 37-1.4 4.8-1.6 14.8-1.6 86 0 78.7.1 80.7 2 83.9 1.1 1.8 3.4 4.1 5.2 5.2 3.2 1.9 5.2 2 83.9 2 71.2 0 81.2-.2 86-1.6 18.5-5.5 31.8-18.8 37.3-37.3 1.4-4.8 1.6-13.5 1.6-69.1 0-55.6-.2-64.3-1.6-69.1-5.5-18.5-18.8-31.8-37.3-37.3-4.8-1.4-13.4-1.6-69.5-1.5-58.6 0-64.6.2-69.6 1.8zm133.5 32.8c4.6 2.4 7.5 5.4 10.1 10.3 1.8 3.3 1.9 6.8 1.9 63s-.1 59.7-1.9 63c-2.6 4.9-5.5 7.9-10.1 10.3-4 2.2-4.6 2.2-71.8 2.5l-67.8.3.3-67.8c.3-64 .4-68 2.2-71.3 3.6-6.8 8.5-10.6 15.6-12.1 1.9-.4 29.2-.6 60.5-.6 56.3.2 57 .2 61 2.4zM54 281.9c-18.3 5.9-31 18.8-36.4 37-1.4 4.8-1.6 13.5-1.6 69.1 0 55.6.2 64.3 1.6 69.1 5.3 17.9 17.5 30.5 35.3 36.6 6.6 2.2 7 2.2 70.7 2.3 56 0 64.7-.2 69.5-1.6 18.5-5.5 31.8-18.8 37.3-37.3 1.4-4.8 1.6-14.8 1.6-86 0-78.7-.1-80.7-2-83.9-1.1-1.8-3.4-4.1-5.2-5.2-3.2-1.9-5.2-2-84.3-1.9-74.9 0-81.4.1-86.5 1.8zm145.8 97.8c-.3 64-.4 68-2.2 71.3-2.6 4.9-5.5 7.9-10.1 10.3-4 2.2-4.5 2.2-63.5 2.2-56.2 0-59.7-.1-63-1.9-4.9-2.6-7.9-5.5-10.3-10.1-2.2-4-2.2-4.5-2.2-63.5 0-56.2.1-59.7 1.9-63 3.6-6.9 8.5-10.6 15.6-12.1 1.9-.4 32.9-.7 68.8-.8l65.3-.1-.3 67.7zM287.2 282c-1.8 1.1-4.1 3.4-5.2 5.2-1.9 3.2-2 5.2-2 83.9 0 71.2.2 81.2 1.6 86 5.3 17.9 17.5 30.5 35.3 36.6 6.6 2.2 7 2.2 70.7 2.3 56 0 64.7-.2 69.5-1.6 18.5-5.5 31.8-18.8 37.3-37.3 1.4-4.8 1.6-13.5 1.6-69.1 0-55.6-.2-64.3-1.6-69.1-5.5-18.5-18.8-31.8-37.3-37.3-4.8-1.4-14.8-1.6-86-1.6-78.7 0-80.7.1-83.9 2zm164.3 32.7c4.6 2.4 7.5 5.4 10.1 10.3 1.8 3.3 1.9 6.8 1.9 63s-.1 59.7-1.9 63c-2.6 4.9-5.5 7.9-10.1 10.3-4 2.2-4.5 2.2-63.5 2.2-56.2 0-59.7-.1-63-1.9-4.9-2.6-7.9-5.5-10.3-10.1-2.2-4-2.2-4.6-2.5-71.8l-.3-67.8 67.8.3c67.2.3 67.8.3 71.8 2.5z" />
            </svg>
            <p>Dashboard</p>
          </Button>
        </Li>
        <hr />
        <Li>
          <StyledNavLink
            Sidebar
            exact
            activeClassName="active"
            activeStyle={{ color: "#222" }}
            to="/"
          >
            <svg
              fill="#fff"
              style={{ flexShrink: 0 }}
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 512 512"
            >
              <path d="M236 3.6c-7.3 3.4-10.2 6.2-115.8 111.7C60.6 174.8 10.4 225.8 8.5 228.6.9 239.9-1.3 257.1 3 270.1c6.5 19.3 21.9 30.7 44 32.5l7.9.7.3 81.6c.3 80.1.4 81.7 2.4 87.1 7.3 19.2 18.7 30.7 36.3 36.7 6.5 2.2 7.5 2.2 55.1 2.3 46.7 0 48.6-.1 51.8-2 1.8-1.1 4.1-3.4 5.2-5.2 1.9-3.2 2-5.2 2-66.8 0-43.3.4-64.8 1.1-67.5 1.7-6 6.4-12.1 11.7-15.2l4.7-2.8h63.2l4.9 3c5.5 3.4 10.7 11.1 11.8 17.2.3 2.1.6 31.8.6 66.1 0 67.5-.2 64.9 5.5 70.2l2.7 2.5 48.1.3c32.2.2 49.9-.1 53.4-.8 13.8-2.9 29.8-15.1 36.1-27.5 7-14 6.6-8.3 7-98.1l.3-81.2 8.2-.7c19.8-1.7 33.3-10.5 41.3-27 3.4-6.8 3.4-7.1 3.4-20.5 0-13.5 0-13.6-3.6-21-3.4-7.3-6.1-10.1-113.2-117.2C288.1 9.7 285.3 7 278 3.6 270.6 0 270.5 0 257 0s-13.6 0-21 3.6zM263.7 31c3.6 1.4 214.8 212.4 216.8 216.6 3.5 7.4.9 16.8-5.8 21.2-3.9 2.6-4.8 2.7-20.7 3.2-18 .5-20.1 1.1-23.7 6.7-1.7 2.5-1.8 8.9-2.3 92.8-.5 82.3-.6 90.3-2.2 93.6-2.7 5.7-6.6 9.8-12.2 12.7l-5.1 2.7-35.7.3-35.7.4-.3-57.9c-.3-56.6-.4-57.9-2.6-64.3-5.9-17.3-17.4-29.5-34.2-35.9-6.4-2.5-7-2.5-40.2-2.9-28.3-.3-34.7-.1-40 1.2-20.7 5.3-37 22-41.4 42.5-1.1 5.2-1.4 18.3-1.4 61.9v55.4l-35.7-.4-35.8-.3-5.5-3c-6.7-3.7-11.5-9.8-12.9-16.5-.7-3.5-1.1-32.9-1.1-91.8 0-84.2-.1-86.8-2-89.9-3.7-6.1-5.7-6.7-24-7.3-15.9-.5-16.8-.6-20.7-3.2-6.7-4.4-9.3-13.8-5.8-21.2C35.4 243.7 246.6 32.4 250 31.1c3.4-1.3 10.2-1.3 13.7-.1z" />
            </svg>
            <p>Home</p>
          </StyledNavLink>
        </Li>
        <Li>
          <StyledNavLink
            Sidebar
            exact
            activeClassName="active"
            to="/productivity"
            activeStyle={{ color: "#222" }}
          >
            <svg
              version="1.0"
              style={{ flexShrink: 0 }}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 512 512"
              fill="#fff"
            >
              <path d="M240 78.1c-64.6 3.9-127.2 35.6-168.3 85.1-34.1 41.2-55.6 97.4-55.7 145.5v9.3h33v-8.8c0-4.8.7-13.3 1.5-19 13.2-92.8 84-163.9 177-177.7 14.6-2.2 42.4-2.2 57 0 69.7 10.4 128.3 53.2 158.5 116.1 11.9 24.8 19.9 57.1 20 80.6v8.8h33v-9.4c0-46.3-21.1-102.7-53.1-142.3-8.1-10-25.2-27.1-35.2-35.2-46.8-37.9-106.6-56.8-167.7-53z" />
              <path d="m298.9 273.7-35.3 63.8-8.1.1c-29.4.2-51.8 27.3-46.6 56.4 5.7 31.8 39.9 49 68.9 34.4 16.9-8.4 26.2-23.9 26.2-43.5 0-11.5-2.7-19.5-10.1-30-1-1.2 5.5-13.6 34-64.9 19.3-34.9 35-63.9 34.7-64.5-.4-1-26.1-15.5-27.5-15.5-.5 0-16.8 28.7-36.2 63.7z" />
            </svg>
            <p>Productivity</p>
          </StyledNavLink>
        </Li>
        <Li>
          <StyledNavLink
            Sidebar
            exact
            activeClassName="active"
            to="/pomodoro"
            activeStyle={{ color: "#222" }}
          >
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 512 512"
              fill="#fff"
            >
              <path d="M196.8 2c-4.8 2.6-8.4 7.3-9.9 13.3C184.5 24 189 33.9 197 38c3.2 1.7 5.9 2 15.5 2H224v37h-3.3c-5.5 0-25.4 3.9-36.7 7.1-74.1 21.3-132.5 81.5-151 155.8-4.9 19.5-6.4 32.5-6.4 54.1 0 21.8 1.5 34.7 6.5 54.4 21.6 85.8 94.2 150.2 182.9 162.2 14 1.8 42.9 1.8 57.7-.1 47.1-6.2 89.1-26.7 123.6-60.4 19.1-18.7 31.1-35.1 43.1-59.1 30-60.2 30.2-132.3.7-192.7-6-12.2-18.4-32-25.6-40.8l-2.4-3.1 12.4-12.4 12.4-12.4 7.5 7.2c8.1 7.7 11.1 9.6 16.8 10.6 11.6 2.1 23.8-8.2 23.8-20.3 0-7.9-1.3-9.5-31.9-40.4-20-20.1-31-30.4-33.9-31.8-3.3-1.7-5.6-2-10.3-1.7-10.4.8-17.6 8-18.7 18.8-.6 6.7 2.2 12.3 10.6 21.2l7.1 7.4-12.4 12.4-12.3 12.3-8.9-6.5c-29.4-21.9-62.3-35.6-97.6-40.7l-12.2-1.7-.3-18.2L265 40h11.4c6.3 0 12.7-.5 14.3-1.1 6.8-2.5 12.3-11 12.3-18.9 0-7.9-5.5-16.4-12.3-18.9-1.9-.7-18-1.1-46.5-1.1-41.4.1-43.9.2-47.4 2zm70 116.1c42.4 4.8 84.9 27.9 112.8 61.1 46 54.9 55.4 128.8 24.4 192.5-9.7 19.8-26.1 41.3-42.3 55.4-64.7 56.1-158.2 59.1-225.2 7.2-11.6-9-28.2-26.3-36.7-38.3-8.1-11.4-19.5-33.9-23.7-47-11.7-36.1-11.7-73.9 0-110 4.2-13.1 15.6-35.6 23.7-47 8.2-11.5 24.9-29.1 35.7-37.6 37.7-29.4 82.7-41.8 131.3-36.3z" />
              <path d="M234.9 158.3c-2.9 1.6-5.4 4-7.4 7.2l-3 4.8-.3 62.6c-.2 45.1 0 63.7.8 66.6 1.6 5.4 5.3 10.1 10 12.5 3.8 1.9 6 2 51.4 2 31.1 0 48.4-.4 50.3-1.1 6.8-2.5 12.3-11 12.3-18.9 0-7.9-5.5-16.4-12.3-18.9-1.8-.7-15.4-1.1-37.3-1.1H265v-51.3c0-47.6-.2-51.5-1.9-55.2-4.8-10.4-17.8-14.7-28.2-9.2z" />
            </svg>
            <p>Pomodoro</p>
          </StyledNavLink>
        </Li>
        <Li>
          <StyledNavLink
            Sidebar
            to="/pricing"
            activeClassName="active"
            activeStyle={{ color: "#222" }}
          >
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 512 512"
              fill="#fff"
            >
              <path d="M236 31.8v31.7l-6.5 1.7c-32.9 8.7-59.5 36.9-67 71.1-2.4 11-1.6 36.7 1.5 48.2 8.1 30.1 28.1 53.1 63.8 73.5 7 4 21 11.7 31.2 17.2 40.4 21.7 57.5 36.8 62.5 55.2 3.8 13.9.6 33.3-7.7 47.4-4.3 7.3-16.8 19.8-24.1 24.1-36.6 21.5-82.3 4.2-97.1-36.9-2.8-7.8-4.6-20.5-4.6-33.8V323h-40v16.7c0 12.5.5 19.1 1.9 25.8 4.1 19.9 13.3 37.2 27.8 52.5 15.2 16 31.2 25.7 51.3 30.9l6.5 1.7.3 30.7.2 30.7h40l.2-30.7.3-30.6 8-2.2c36.3-9.8 65.4-38.9 76.1-76 3.6-12.3 4.5-35 1.9-47.6-5.6-28-24.2-50.5-59.7-72.5-5.1-3.1-18.9-10.8-30.7-17.2-34-18.2-43.8-24.7-54.1-36-11.7-12.7-16.5-26.5-15.8-45.4.4-11.4.5-11.9 4.7-20.3C216.5 114 234.3 103 256 103c24 0 44 13.9 51.7 36.1 1.9 5.5 2.5 9.8 3 21.4l.6 14.5h39.9l-.5-18.8c-.4-20.3-1.3-24.8-7-38.2-6-13.9-17.2-28-29.9-37.5-8-6-21.9-12.9-30.7-15.1l-7.1-1.8V0h-40v31.8z" />
            </svg>
            <p>Pricing</p>
          </StyledNavLink>
        </Li>
        <Li>
          <StyledNavLink
            Sidebar
            to="/jobpostings"
            activeClassName="active"
            activeStyle={{ color: "#222" }}
          >
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 512 512"
              fill="#fff"
            >
              <path d="M181.3 33c-13.4 4.8-23.7 15.2-28.4 28.8-1.5 4.2-1.9 8.3-1.9 17.4V91H80.3c-67.7 0-70.9.1-73.7 1.9-1.5 1-3.7 3.2-4.7 4.7-1.8 2.8-1.9 8.1-1.9 175s.1 172.3 1.9 177.6C6.6 464 17 474.4 30.7 479.1 36.2 481 41 481 256 481s219.8 0 225.3-1.9c13.7-4.7 24.1-15.1 28.8-28.9 1.8-5.3 1.9-10.7 1.9-176.9 0-188.6.4-176.2-6.2-180.3-3.2-1.9-4.9-2-74-2H361V79.2c0-9.1-.4-13.2-1.9-17.4-4.7-13.8-15.1-24.2-28.8-28.9-5.4-1.8-8.8-1.9-74.7-1.8-64.7 0-69.4.2-74.3 1.9zm141.5 30.5c5.6 3.4 7.4 7.5 8 18.1l.5 9.4H180.7l.5-9.4c.7-12.7 3.7-17.6 12.3-19.7 1.7-.4 30.7-.7 64.5-.6 59.6.2 61.6.3 64.8 2.2zM475 121.7c0 2.5-46.6 140.3-48.2 142.6-4.4 6.2-4 6.2-52 6.5l-43.8.3v-10.3c0-11.3-1.1-14.2-6.6-17.9-2.8-1.8-5.9-1.9-68.4-1.9-62.5 0-65.6.1-68.4 1.9-5.5 3.7-6.6 6.6-6.6 17.9v10.3l-43.7-.3c-48.1-.3-47.7-.3-52.1-6.5C83.6 262 37 124.2 37 121.7c0-.4 98.6-.7 219-.7 120.5 0 219 .3 219 .7zM56 276.4c3.8 7.9 12.1 16 20.8 20.3l7.6 3.8 48.3.3 48.3.3v10.2c0 11.2 1.1 14.2 6.6 17.8 2.8 1.8 5.9 1.9 68.4 1.9 62.5 0 65.6-.1 68.4-1.9 5.5-3.6 6.6-6.6 6.6-17.8v-10.2l48.3-.3 48.3-.3 7.6-3.8c8.7-4.3 17-12.4 20.8-20.3 1.2-2.7 7.6-20.7 14.1-39.9l11.8-35-.2 119c-.2 117.1-.2 119.1-2.2 122.3-1.1 1.8-3.6 4.3-5.5 5.5l-3.5 2.2H256c-212.7 0-214.5 0-217.8-2-1.8-1.1-4.3-3.6-5.5-5.5l-2.2-3.5-.2-119-.2-119 11.8 35c6.5 19.2 12.9 37.2 14.1 39.9zm245 9.6v15h-90v-30h90v15z" />
            </svg>
            <p>Job Postings</p>
          </StyledNavLink>
        </Li>
        <Li>
          <StyledNavLink
            Sidebar
            to="/product"
            activeClassName="active"
            activeStyle={{ color: "#222" }}
          >
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 512 512"
              fill="#fff"
            >
              <path d="M236.5 1.7c-32.1 6.8-58.4 30.1-69.3 61.3-3.8 11-5.2 20.1-5.2 34.9v12l-38.7.3c-36.7.3-39 .4-42.1 2.3-7.4 4.4-5.5-9.3-26.8 193.2C43.8 407.4 35 493.4 35 496.9c0 6.2.1 6.5 4.4 10.7l4.3 4.4h212.4c205 0 212.5-.1 215.2-1.9 3.4-2.2 5.6-5.2 6.7-9.2.6-2.1-4.9-58.2-18.5-188.2-10.7-101.9-19.7-186.8-20.1-188.7-.9-5.3-3-8.6-7.1-11.2-3.8-2.3-3.9-2.3-42.4-2.6l-38.6-.3-.6-16.7c-.6-18.4-2.1-25.6-8.1-38.8-12.8-27.6-39.2-48.1-69-53.3-8.5-1.5-28.8-1.2-37.1.6zm33 30.8c18.1 3.8 34.9 16.8 43.3 33.5 5.1 10.2 7.2 20.2 7.2 34.1v9.9H192.7l.6-13.3c.4-10.4 1-14.9 3.1-21.3 4.2-13.2 13-25.2 23.9-32.6 15.5-10.5 31.8-13.9 49.2-10.3zM162 160.9c0 17.9.1 19 2.3 22.1 3.7 5.5 7.1 7.4 13.2 7.4s9.5-1.9 13.3-7.4c2.1-3.1 2.2-4.2 2.2-22.1V142h127v18.9c0 17.9.1 19 2.3 22.1 3.7 5.5 7.1 7.4 13 7.4 5.8 0 10-2 13.2-6.2 1.8-2.5 2-4.5 2.3-22.5l.3-19.7h29.5c19 0 29.4.4 29.4 1s7.9 76 17.5 167.6S445 478.1 445 479.1c0 1.9-3.9 1.9-188.5 1.9-150.1 0-188.5-.3-188.5-1.3 0-.6 7.9-76.1 17.5-167.7S103 144.7 103 143.7c0-1.6 2.1-1.7 29.5-1.7H162v18.9z" />
            </svg>
            <p>Product</p>
          </StyledNavLink>
        </Li>
        <Li>
          <StyledNavLink
            Sidebar
            to="/flags"
            activeClassName="active"
            activeStyle={{ color: "#222" }}
          >
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 512 512"
              fill="#fff"
            >
              <path d="M61 256v256h30V311.1l6.7 3.1c10.8 4.9 21.1 8.4 34.9 12 12.6 3.2 13.4 3.3 33.4 3.3 22.5 0 28.9-.9 46.3-6.7 13.5-4.5 25.7-10.2 50.5-23.7 42-22.9 57.7-28.2 83.2-28.2 26.2 0 58 11.6 90.3 33 7.5 5 14 9.1 14.2 9.1.3 0 .5-62.3.5-138.4V36.2l-6.7-4.3c-18.2-11.4-43.1-22.5-61.4-27.3-15.5-4-24.4-4.9-42.7-4.3-30.5 1-46.5 6.4-92.4 31.4-29.2 15.8-39.7 20.5-54.7 24.2-10.6 2.7-15.7 3.2-27.5 3.2-18.7 0-37.4-5.1-61.3-16.6L91 36.1V0H61v256zM365 32.6c12.2 2.2 28 7.7 43 15l13 6.3v205l-6.7-3.1c-10.8-4.9-21.1-8.4-34.9-12-12.6-3.2-13.4-3.3-33.4-3.3-16.3 0-22.3.4-29 1.9-19.8 4.3-35.3 10.9-69.2 29.3-29.2 15.8-39.7 20.5-54.7 24.2-10.6 2.7-15.7 3.2-27.5 3.2-18.7 0-37.4-5.1-61.4-16.6L91 276.1v-205l6.7 3.1c10.8 4.9 21.1 8.4 34.9 12 12.6 3.2 13.4 3.3 33.4 3.3 22.5 0 28.9-.9 46.3-6.7 13.5-4.5 25.7-10.2 50.5-23.7 25.8-14.1 38.9-20.2 50.9-23.6 18.3-5.3 32.8-6.1 51.3-2.9z" />
            </svg>

            <p>Flags</p>
          </StyledNavLink>
        </Li>
      </Ul>
    </DashboardWrapper>
  );
};

export default Dashboard;
