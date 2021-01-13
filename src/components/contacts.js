import React, {Component} from 'react';
import {Grid, Cell, List,ListItem,ListItemContent} from 'react-mdl'

class Contacts extends Component{
    render(){
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Nickalicious Killa</h2>
                        <img
                            src="https://i5.walmartimages.com/asr/2b1a86e5-e37d-49fc-bbb8-12be23753fae_1.31f494474956887df2c6bc9468fa6d8d.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff"
                            alt="avatar"
                            style={{height: '200px'}}
                        />
                        <p style={{width:'75%', margin: 'auto', paddingTop:'1em'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
                                        <i className = "fa fa-phone-square" aria-hidden="true"/>
                                         (647) 309-2778
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
                                        <i className = "fa fa-fax" aria-hidden="true"/>
                                         (647) 309-2778
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
                                        <i className = "fa fa-envelope" aria-hidden="true"/>
                                         nickdyer714@gmail.com
                                    </ListItemContent>
                                </ListItem>
                                
                                <ListItem>
                                    <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
                                        <i className = "fa fa-skype" aria-hidden="true"/>
                                          My SkypeId
                                    </ListItemContent>
                                </ListItem>
                            </List>
                         </div>
                    </Cell>


                </Grid> 
                
            </div>
        )
    }
}
export default Contacts;