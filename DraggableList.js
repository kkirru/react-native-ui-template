import React, { Component } from 'react'
import DraggableFlatList from 'react-native-draggable-flatlist'
import { View, TouchableOpacity, Text } from 'react-native'

export default class DraggableList extends Component {
    state = {
        data: [
            {
                "backgroundColor": "rgb(120, 0, 132)",
                "key": "item-0",
                "label": 0,
            },
            {
                "backgroundColor": "rgb(33, 5, 132)",
                "key": "item-1",
                "label": 1,
            },
            {
                "backgroundColor": "rgb(156, 10, 132)",
                "key": "item-2",
                "label": 2,
            },
        ]
    }

    onDragEnd = (data) => {
        this.setState({ data });
        console.log(this.state.data);
    }

    renderItem = ({ item, index, drag, isActive }) => {
        return (
            <TouchableOpacity
                style={{
                    height: 100,
                    backgroundColor: isActive ? 'blue' : item.backgroundColor,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 10,
                }}
                onLongPress={drag}
            >
                <Text style={{
                    fontWeight: 'bold',
                    color: 'white',
                    fontSize: 32,
                }}>{item.label}</Text>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            < View style={{ flex: 1 }}>
                <DraggableFlatList
                    data={this.state.data}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => `draggable-item-${item.key}`}
                    onDragEnd={({ data }) => this.onDragEnd(data)}
                />
            </View >
        )
    }
}
