import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    carContainer: {
        width: '100%',
        height: '100%',
      },
    
    
      titles: {
        marginTop: '30%',
        width: '100%',
        alignItems: 'center',
      },
    
      title: {
        fontSize: 40,
        fontWeight: "700",
      },

      subtitleCTA:{
        textDecorationLine: 'underline'

      },
    
      subtitle: {
        fontSize: 16,
        color: '#5C5E62',
      },
    
      image: {
        width: '100%',
        height: '100%',
        resizeMode:'contain',
        position: 'absolute'
      },

      buttonContainer: {
        position: 'absolute',
        bottom : 50,
        width : '100%'

      }
    

});

export default styles;