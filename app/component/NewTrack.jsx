import styled from "styled-components";

const StyledNewTrack = styled.div`
  background-colour: teal;
  color: white;
  padding: 1rem 2rem;
`;

function NewTrack() {
  return (
    <StyledNewTrack>
      <div className="avatar">
        <div className="avatar-nt"></div>
        <i></i>
      </div>
      <div className="title">Title</div>
    </StyledNewTrack>
  );
}

export default NewTrack;
