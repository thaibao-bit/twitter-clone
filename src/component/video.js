import styled from 'styled-components'
import videosrc from '../assets/spideman.mp4'

const Video = () => {
    const VideoWrapper = styled.div`
    display: flex;
    `
    const Video = styled.video`
    width: 100%;
    border-radius: 25px;
    `
    return <VideoWrapper>
        <Video src={videosrc} ></Video>
        </VideoWrapper>
}

export default Video