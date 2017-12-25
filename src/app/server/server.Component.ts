import {Component} from '@angular/core'

@Component({
selector:'app-server',
templateUrl:'./server.component.html',
styles :[`.colorChange{color:red;}`]

})
export class ServerComponent
{
    serverId=10;
    serverStatus='offline';
    paraContent=['original content'];
    paraName='paraitem11111--------';
    counter=0;
    log=[];
    constructor()
    {  
         this.serverStatus=Math.random()> 0.5 ? 'online' : 'offline'; 

    }

getServerStatus()
{
return this.serverStatus;

}
getColor()
{
return this.serverStatus==='online'?'green':'blue';  

}
togglePara()    

{this.paraContent.push(this.paraName);


//this.log.push(this.log.length +1);

this.log.push(new Date());


}

}