/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from "styled-components";

const Main = (props) => {
  return (
  <Container>
  <ShareBox>
   Share
  <div>
    <img src="/images/user.svg" alt="" />
    <button>Start a post</button>
  </div>
  <div>
    <button>
      <img src="/images/photo-icon-removebg.png" alt="" width="40px" height="37px"  />
      <span>Photo</span>
    </button>
    <button>
      <img src="/images/video-icon-removebg.png" alt="" width="46px" height="48px" />
      <span>Video</span>
    </button>
    <button> 
      <img src="/images/event-logo-removebg.png" alt="" width="50px" height="47x" />
      <span>Event</span>
    </button>
    <button>
      <img src="/images/art1.png" alt="" width="30px" height="33px"/>
      <span>Write article</span>
    </button>
  </div>
  </ShareBox>
  <div>
    <Article>
      <SharedActor>
        <a>
          <img src="/images/user.svg" alt="" />
          <div>
            <span>Title</span>
            <span>Info</span>
            <span>Date</span>
          </div>
        </a>
        <button>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Simple_icon_ellipsis.svg/1280px-Simple_icon_ellipsis.svg.png" alt="" width="50px" />
        </button>
      </SharedActor>
      <Description>
        Description
      </Description>
      <ShareImg>
        <a>
          <img src="/images/forest.png" alt="" />
        </a>
      </ShareImg>
      <SocialCounts>
        <li>
          <button>
            <img src="/images/like.png" alt="" width="30px" height="28px"/>
            <img src="/images/clap.png" alt="" width="30px" height="32px"/>
            <span>75</span>
          </button>
        </li>
        <li>
          <a>2 comments</a>
        </li>
      </SocialCounts>
      <SocialActions>
      <button>
        <img src="data:image/png;base64,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" alt="" width="30px" height="30px"/>
        <span>Like</span>
      </button>
      <button>
        <img src="https://icons.veryicon.com/png/o/hardware/jackdizhu_pc/comment-25.png" alt="" width="30px" height="30px"/>
        <span>Comments</span>
      </button>
      <button>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqJmFTMKdQ1nSEelm-trg3VlQeZOGoKhmeqb1o5rf8RFiz_tvrRH8WdTEMZyK3IeCO548&usqp=CAU" alt="" width="30px" height="30px"/>
        <span>Send</span>
      </button>
      <button>
        <img src="https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/send-submit-2.png" alt="" width="30px" height="30px" />
        <span>Share</span>
      </button>
      </SocialActions>
    </Article>
  </div>
  </Container>
  )
};

const Container = styled.div`
  grid-area: main;
`;

const CommonCard = styled.div`
text-align: center;
overflow: hidden;
margin-bottom: 8px;
background-color: #fff;
border-radius: 5px;
position: relative;
border: none;
box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);

`

const ShareBox = styled(CommonCard)`
display: flex;
flex-direction: column;
color: #958b7b;
margin: 0 0 8px;
background: white;
div{
  button{
    outline: none;
    color: rgba(0, 0, 0, 0.6);
    font-size: 14px;
    line-height: 1.5;
    min-height: 48px;
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
    font-weight: 600;
  }
  &:first-child{
    display: flex;
    align-items: center;
    padding: 8px 16px 0px 16px;
    img{
      width: 48px;
      border-radius: 50%;
      margin-right: 8px;
    }
    button{
      margin: 4px 0;
      flex-grow: 1;
      border-radius: 35px;
      padding-left: 16px;
      border: 1px solid rgba(0, 0, 0, 0.15);
      background-color: white;
      text-align: left;
    }
  }
&:nth-child(2){
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-bottom: 4px;
  buttton{
    img{
      margin: 0 4px 0 -2px;
    }
    span{
      color: #70b5f9;
    }
  }
}
}

`
const Article = styled(CommonCard)`
padding: 0;
margin: 0 0 8px;
overflow: visible;

`;

const SharedActor = styled.div`
padding-right: 40px;
flex-wrap: nowrap;
padding: 12px 16px 0;
margin-bottom: 8px;
align-items: center;
display: flex;
a{
  margin-right: 12px;
  flex-frow: 1;
  overflow: hidden;
  display: flex;
  text-decoration: none;
  img{
    width: 48px;
    height: 48px;
  }
  & > div{
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-basis: 0;
    margin-left: 8px;
    overflow: hidden;
    span{
      text-align: left;
      &:first-child{
        font-size: 14px;
        font-weight: 700;
        color: rgba(0, 0, 0, 1);
      }
      &:nth-child(n + 1){
        font-size: 12px;
        color: rgba(0, 0, 0, 0.6)
      }

    }
  }
}
button{
  position: absolute;
  right: 12px;
  top: 0;
  background: transparent;
  border: none;
  outline: none;
}
`;
const Description = styled.div`
  padding: 0 16px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.9);
  font-size: 14px;
  text-align: left;
`;

const ShareImg = styled.div`
marging-top: 8px;
width: 100%;
display: block;
position: relative;
background-color: #f9fafb;
img{
  object-fit: contain;
  width: 100%;
  height: 100%;

}
`;
const SocialCounts = styled.div`
line-height: 1.3;
display: flex;
algin-items: flex-start;
overflow: auto;
margin: 0 16px;
padding: 8px 0;
border-bottom: 1px solid #e9e5df;
list-style: none;
li{
  margin-right: 5px;
  font-size: 12px;
  button{
    display: flex;
  }
}
`;

const SocialActions = styled.div`
align-items: center;
display: flex;
justify-content: flex-start;
margin: 0;
min-height: 40px;
padding: 4px 8px;
button{
  display: inline-flex;
  align-items: center;
  padding: 8px;
  color: #0a66c2;

  @media(min-width: 768px){
    span{
      margin-left: 8px;
    }
  }
}


`

export default Main;
