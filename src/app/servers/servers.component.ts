import { Component } from '@angular/core';
import{ OnInit} from '@angular/core';

@Component({
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
allowNewServer=false;
serverCreationStatus="no server was created"; 
serverName='testServer';
userName='';
servStatus='offline';
serverCreated=false;
servers=['testServer']
costructor()
  {
   
  }
  serverId=100;
    getServerId() {return this.serverId;}

 ngOnInit()
 {
}
onCreateServer()
{ this.serverCreated=true;
  this.servers.push(this.serverName);
  this.serverCreationStatus="server was created";
}    
onUpdateServerName(event:Event)
{
  this.serverName=(<HTMLInputElement>event.target).value;
}
clearAll()
{
  this.userName='';
}
  
func()
{
return (this.userName=="")

}


}
