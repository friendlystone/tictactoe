import React, { Component } from "react";
import { 
    Button, 
    Modal, 
    StyleSheet, 
    View, 
    TextInput 
} from "react-native";

export default class Appointment extends Component {
  state = {
    modalVisible: false,
    start: "",
    end: "",
    title: [],
    summary: []
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  onChangeStart = ( newStart) => {
    this.setState({ start: newStart })
  }

  onChangeEnd = ( newEnd) => {
    this.setState({ end: newEnd })
  }

  onChangeTitle = ( newTitle) => {
    this.setState({ title: newTitle })
  }

  onChangeSummary = ( newSummary) => {
    this.setState({ summary: newSummary })
  }

  addAppointment = () => {
    let collection = {}
    collection.start = this.state.start,
    collection.end = this.state.end,
    collection.title = this.state.title,
    collection.summary = this.state.summary

    fetch('https://610cfee166dd8f0017b76f7a.mockapi.io/appointment', {
        method: 'POST',
        body: JSON.stringify(collection),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }).then(res => res.json())
    .catch(error => console.error('Error', error))
    .then(Response => console.log('Success', Response));
  }

  render() {
    const { modalVisible } = this.state;
    return (
      <View>
        <Modal
          visible = { modalVisible }
          onRequestClose={() => {
            this.setModalVisible(!modalVisible);
          }}
          style = { styles.theModal }
        >
            <Button
                title = ' Hide modal '
                onPress = {() => this.setModalVisible(false) }  
            />
                <TextInput
                    style = { styles.input }
                    onChangeText = { ( start ) => this.onChangeStart(start) }
                    value = { this.state.start }
                    title = ' Appointment start time '
                    placeholder = "start time for your appointment"
                />
                <TextInput
                    style = { styles.input }
                    onChangeText = { ( end ) => this.onChangeEnd(end) }
                    value = { this.state.end }
                    title = ' End of the appointment '
                    placeholder = "end time for your appointment"
                />
                <TextInput
                    style = { styles.input }
                    onChangeText = { ( title ) => this.onChangeTitle(title) }
                    value = { this.state.title }
                    title = ' Title '
                    placeholder = "the title for your appointment"
                />
                <TextInput
                    style = { styles.input }
                    onChangeText = { ( summary) => this.onChangeSummary(summary) }
                    value = { this.state.summary }
                    title = ' Description '
                    placeholder = "what is this appointment about"
                />
            <Button
                title = ' Add event '
                color = '#f194ff'
                style = { styles.btnSize }
                onPress = {() => {this.props.makeAppointment( {start: this.state.start, end: this.state.end, title: this.state.title, summary: this.state.summary }); this.addAppointment()} }  
            />
        </Modal>
        <Button
                title = ' Add an appointment '
                onPress = {() => this.setModalVisible(true) }
        />
    </View>
    );
  }
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    btnSize: {
        width:"100%"
    },
    theModal: {
        position: 'center'
    }
  });

