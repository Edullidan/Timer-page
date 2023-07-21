import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  background-color: #0c3643;
  height: 500vh;
`;
const StyledSection = styled.div`
  background-color: #0b7c9e;
  width: 20vw;
  margin-left: 650px;
  padding: 1rem 6rem;
  border-radius: 2rem;
  text-align: center;
`;

const StyledH1 = styled.h1`
  color: black;
`;
const StyledButtonOne = styled.button`
  border: none;
  border-radius: 10px 10px 10px 10px;
  cursor: pointer;
  color: white;
  font-size: 16px;
  background-color: #0c3643;
  margin-left: 10px;
`;

const StyledButtonTwo = styled.button`
  border: none;
  border-radius: 10px 10px 10px 10px;
  cursor: pointer;
  color: white;
  font-size: 16px;
  background-color: #0c3643;
`;

const Timers = () => {
  const [seconds, setSeconds] = useState(0);
  const [minute, setMinute] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, []);

  useEffect(() => {
    if (seconds === 59) {
      setSeconds(0);
      setMinute((prevMinute) => prevMinute + 1);
    }
  }, [seconds]);

  const restart = () => {
    clearInterval(timerRef.current);
    setSeconds(0);
    setMinute(0);
    timerRef.current = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);
  };

  const stop = () => {
    clearInterval(timerRef.current);
  };
  return (
    <StyledDiv>
      <StyledSection>
        <StyledH1>Timer</StyledH1>
        <h2>
          {minute < 10 ? "0" + minute : minute}:
          {seconds < 10 ? "0" + seconds : seconds}
        </h2>
        <StyledButtonOne onClick={restart}>Restart</StyledButtonOne>
        <StyledButtonTwo onClick={stop}>Stop</StyledButtonTwo>
      </StyledSection>
    </StyledDiv>
  );
};

export default Timers;
