Each order is created with status “Submitted”. 
Tomer can prepare a single order at a time. When he starts working on an order its status 
changes to “In Preparation”. At this stage, Tomer applies the toppings for each pizza in the 
order, and the system should update the inventory accordingly.This stage will take a random 
amount of time between 3 sec to 6 sec per pizza. 
If some ingredient ran out the order will be moved to “Cancelled” status.  
When Tomer is done working on an order its status should be changed to “Delivered”. 
 
Technical Requirements 
 
The system should be developed using the NestJS framework (in typescript). It must be 
composed of at least 3 microservices: 
1. Order microservice - will store all orders and their statuses. 
2. Inventory microservice - will store the amount of each topping available in the inventory. 
3. Kitchen microservice - will manage the workflow described above. It should receive 
orders and update them and the inventory automatically. 
 
The end user (customer) should be able to create orders via the order microservice and check 
the order status from time to time (and see it updated automatically).
