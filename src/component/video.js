import styled from 'styled-components'
import videosrc from '../assets/spideman.mp4'
import {useRef, useImperativeHandle} from 'react'

const Video = (props, ref) => {
    const VideoWrapper = styled.div`
    display: flex;
    width: 100%;
    `
    const Video = styled.video`
    width: 100%;
    border-radius: 25px;
    `
    return <VideoWrapper>
        <Video src={videosrc} controls>  </Video>
        </VideoWrapper>
}

export default Video