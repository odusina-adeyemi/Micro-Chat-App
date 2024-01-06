
import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from "react-chat-engine-advanced";



const ChatsPage = (props) => {

    const chatProps = useMultiChatLogic('126e49fc-7d28-4457-b5a1-9103093eb58c', props.user.username, props.user.secret);   
    return (
        <div   style={{height:'100vh'}}>
            <MultiChatSocket {...chatProps}/>
            <MultiChatWindow {...chatProps} style={{height:'100%'}}/>

        </div>
    )
};


export default ChatsPage