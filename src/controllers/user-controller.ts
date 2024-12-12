import { Request, Response } from 'express';
import { User, Thought } from '../models/index.js';

 export const getUsers = async(_req: Request, res: Response) => {
   try {
     const dbUserData = await User.find()
       .select('-__v')

     return res.json(dbUserData);
   } catch (err) {
     console.log(err);
     return res.status(500).json(err);
   }
 }
 
 export const getSingleUser = async(req: Request, res: Response) => {
   try {
     const dbUserData = await User.findOne({ _id: req.params.userId })
       .select('-__v')
       .populate('friends')
       .populate('thoughts');

     if (!dbUserData) {
       return res.status(404).json({ message: 'No user found!' });
     }

     return res.json(dbUserData);
   } catch (err) {
     console.log(err);
     return res.status(500).json(err);
   }
 }

 export const createUser = async(req: Request, res: Response) => {
   try {
     const dbUserData = await User.create(req.body);
     return res.json(dbUserData);
   } catch (err) {
     console.log(err);
     return res.status(500).json(err);
   }
 }

 export const  updateUser = async(req: Request, res: Response) => {
   try {
     const dbUserData = await User.findOneAndUpdate(
       { _id: req.params.userId },
       {
         $set: req.body,
       },
       {
         runValidators: true,
         new: true,
       }
     );

     if (!dbUserData) {
       return res.status(404).json({ message: 'No user found!' });
     }

     return res.json(dbUserData);
   } catch (err) {
     console.log(err);
     return res.status(500).json(err);
   }
 }
 // BONUS
 export const deleteUser = async(req: Request, res: Response) =>{
   try {
     const dbUserData = await User.findOneAndDelete({ _id: req.params.userId })

     if (!dbUserData) {
       return res.status(404).json({ message: 'No user with this id!' });
     }

     // BONUS
     await Thought.deleteMany({ _id: { $in: dbUserData.thoughts } });
     return res.json({ message: 'User info deleted!' });
   } catch (err) {
     console.log(err);
     return res.status(500).json(err);
   }
 }

 export const addFriend = async(req: Request, res: Response) =>{
   try {
     const dbUserData = await User.findOneAndUpdate({ _id: req.params.userId }, { $addToSet: { friends: req.params.friendId } }, { new: true });

     if (!dbUserData) {
       return res.status(404).json({ message: 'No user found!' });
     }

     return res.json(dbUserData);
   } catch (err) {
     console.log(err);
     return res.status(500).json(err);
   }
 }

 export const removeFriend = async(req: Request, res: Response) => {
   try {
     const dbUserData = await User.findOneAndUpdate({ _id: req.params.userId }, { $pull: { friends: req.params.friendId } }, { new: true });

     if (!dbUserData) {
       return res.status(404).json({ message: 'No user foun!' });
     }

     return res.json(dbUserData);
   } catch (err) {
     console.log(err);
     return res.status(500).json(err);
   }
 };