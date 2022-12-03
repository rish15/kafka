console.log("producer");
import kafka from 'node-rdkafka';

const stream = kafka.Producer.createWriteStream({
    'metadata.broker.list': 'localhost:9092'
},{},{topic : 'myTopic'})

function queueMessage(){
    const success = stream.write(Buffer.from('message to be sent from producer side'));
    if(success){
        console.log("message successfully written");
    }
}
setInterval(()=>{
    queueMessage();
},3000)