import React, { useContext, useState, useEffect } from 'react';
import Grid from "@material-ui/core/Grid";
import ProfileCard from "../components/cards/ProfileCard";
import EcardDownloadCard from "../components/cards/EcardDownloadCard";
import FeeCard from '../components/cards/FeeCard'
import PartnershipsCard from "../components/cards/PartnershipsCard";
import Navbar from "../components/navbar/Navbar";
import { Context } from '../context/AuthContext';
import { GroupContext } from '../context/GroupContext';

function HomePageTest() {

    const styles = {
        textAlign: "center"
      };
      const section = {
        height: "fit-content",
      };
      const summary = {
        marginTop: 15,
        marginBottom: 15,
        padding: 10,
      };
      
      const associate = {associateNumber: 123, name: "Gonçalo  Dias Camaz Moreira", nickname: "Camadas", phoneNumber: "936954775",email: "gcamaz@sapo.pt", password: "myPassword123!!",active: true, address:"Rua do Socialismo 20",city: "Vila do Conde",postalCode: "4485-032",groups: ["TUM"]}
      const [cardClicked, setCardClicked] = useState(false)
      const [cardClicked_name, setCardClicked_name] = useState("")
      const [propsToSend, setPropsToSend] = useState({})

      const {groups,handleGetGroups} = useContext(GroupContext)
      useEffect(() => {
          if (groups.length === 0) {
              handleGetGroups()
          }
        }, [groups, handleGetGroups])
      
return(
    <div className="home">

    <Navbar isAdmin={false}/>
  <div style={styles}>
    <Grid container layout={"row"} spacing={3} style={summary}>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <div style={section}>
            <ProfileCard associate={associate} />
        </div>
        <div style={section}>
            <EcardDownloadCard associate={associate} arcumImage={"http://arcum.pt/images/logos/arcum.png"}/>
        </div>
      </Grid>

      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <div style={section}>
        <FeeCard />
        </div>
        <div style={section}>
        <PartnershipsCard/>
        </div>
      </Grid>
    </Grid>
  </div>
  </div>
)
}

export default HomePageTest