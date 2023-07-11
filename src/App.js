import "@aws-amplify/ui-react/styles.css";
import {
  View,
  withAuthenticator,
  Button,
  Heading,
  Card,
} from "@aws-amplify/ui-react";

function App({signOut}){
  return (
    <View className="App">
      <Card>
        <Heading level={1}>Welcome to Amplify!</Heading>
        </Card> 
        <Button onClick={signOut}>Sign out</Button>
    </View>
  )
}
export default withAuthenticator(App);