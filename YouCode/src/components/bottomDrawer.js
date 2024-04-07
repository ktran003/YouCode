// import { useState } from 'react';
// import { Image, Modal, View, Button, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

// // We need to get the height of the phone and use it relatively, 
// // This is because height of phones vary

// export default function BottomDrawer({children}) {

//     const windowHeight = Dimensions.get('window').height;

//     // This state would determine if the drawer sheet is visible or not
//     const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
    
//     // Function to open the bottom sheet 

//     const handleOpenBottomSheet = () => {
//         setIsBottomSheetOpen(true);
//     };


    
//     // Function to close the bottom sheet
//     const handleCloseBottomSheet = () => {
//         setIsBottomSheetOpen(false);
//     };

//     return (
//         <View style={styles.container}>
//             <TouchableOpacity onPress={handleOpenBottomSheet} style={styles.button}>
//                 <Text style={styles.buttonText}>Open Drawer</Text>
//             </TouchableOpacity>
//             <Modal
//                 animationType="slide"
//                 transparent={true}
//                 visible={isBottomSheetOpen}
//                 onRequestClose={handleCloseBottomSheet} >

//                 <View style={[styles.bottomSheet, { height: windowHeight * 0.6 }]}>
//                     <View style={styles.header}>
//                         <TouchableOpacity onPress={handleCloseBottomSheet}>
//                             <Text style={styles.closeButton}>Close</Text>
//                         </TouchableOpacity>
//                     </View>
//                     <View style={styles.content}>
//                         {children}
//                     </View>
//                 </View>
//             </Modal>
//         </View>
//     );
// }

// export function handleOpenBottomSheet() {
//     setIsBottomSheetOpen(true);
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     button: {
//         width: '90%',
//         alignItems: 'center',
//         justifyContent: 'center',
//         borderWidth: 1,
//         borderColor: '#86827e',
//         paddingVertical: 12,
//         borderRadius: 8,
//     },
//     buttonText: {
//         color: '#86827e',
//         fontSize: 16,
//         fontWeight: 'bold',
//     },
//     bottomSheet: {
//         position: 'absolute',
//         left: 0,
//         right: 0,
//         justifyContent: 'flex-start',
//         alignItems: 'center',
//         backgroundColor: 'white',
//         borderTopLeftRadius: 10,
//         borderTopRightRadius: 10,
//         paddingVertical: 23,
//         paddingHorizontal: 25,
//         bottom: 0,
//         borderWidth: 1,
//         borderColor: 'red'
//     },
//     header: {
//         flex: 0,
//         width: '100%',
//         justifyContent: 'space-between',
//         flexDirection: 'row',
//     },
//     closeButton: {
//         color: '#000',
//         fontSize: 18,
//         fontWeight: 'bold',
//     },
//     content: {
//         paddingVertical: 16,
//     }
// });


import React, { useState } from 'react';
import { Modal, View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';

export default function BottomDrawer({ children }) {
    const windowHeight = Dimensions.get('window').height;
    const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

    const handleOpenBottomSheet = () => {
        setIsBottomSheetOpen(true);
    };

    const handleCloseBottomSheet = () => {
        setIsBottomSheetOpen(false);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleOpenBottomSheet} style={styles.button}>
                <Text style={styles.buttonText}>Open Drawer</Text>
            </TouchableOpacity>
            <Modal
                animationType="slide"
                transparent={true}
                visible={isBottomSheetOpen}
                onRequestClose={handleCloseBottomSheet}
            >
                <View style={[styles.bottomSheet, { height: windowHeight * 0.6 }]}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={handleCloseBottomSheet}>
                            <Text style={styles.closeButton}>Close</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.content}>
                        {children}
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#86827e',
        paddingVertical: 12,
        borderRadius: 8,
    },
    buttonText: {
        color: '#86827e',
        fontSize: 16,
        fontWeight: 'bold',
    },
    bottomSheet: {
        position: 'absolute',
        left: 0,
        right: 0,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        paddingVertical: 23,
        paddingHorizontal: 25,
        bottom: 0,
        borderWidth: 1,
        borderColor: 'red'
    },
    header: {
        flex: 0,
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    closeButton: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
    },
    content: {
        paddingVertical: 16,
    }
});
