open vitual box 
- 2 vm 

click on new:- 
give name to vm 
1st. vm1 
type linux
ubuntu 64bits

next > next > use an existing virtual hard disk file > select the downloaded ubuntu iso file > open > create

2nd. vm2
same up steps as vm1

file > preferences > network > click + thing top right next to name > NatNetworks appears > ok 

select vm1 right click > settings > network > attach to > nat > nat network > ok
select vm2 right click > settings > network > attach to > nat > nat network > ok

start vm1 and vm2 double clicking on them
vm1 login > vagrant and password vagrant enter
vm2 login > vagrant and password vagrant enter

check ip address of vm1 and vm2 using ifconfig command in terminal
> ifconfig 
> ls
> touch test.txt
> cat test.txt
> nano test.txt
// nano is a text editor in linux terminal
write something in test.txt file and save it using ctrl + o and exit using ctrl + x


// transfer file from vm1 to vm2 using scp command in terminal
in vm1 terminal
> scp test.txt vagrant@vm2_ip_address:/home/vagrant
// enter password vagrant when prompted

// check if file is transferred to vm2
in vm2 terminal
> ls
// test.txt should be listed in the output
// open test.txt in vm2 to verify its content
> cat test.txt


if newwer version of virtualbox is downloaded: 
open virtualbox > go to network > click on + NAT Network > ok
then create vm > new > name it VM1 > type linux > ubuntu 64bits > use an existing virtual hard disk file > select the downloaded ubuntu iso file > open > create
so to settings of VM1 > network > attach to > nat > nat network >  permission ya something > allow all > ok

similar steps for VM2

then start both VM1 and VM2 > login with vagrant and password vagrant > check ip address using ifconfig command in terminal > transfer file using scp command in terminal > verify file transfer in VM2 using ls and cat commands in terminal
