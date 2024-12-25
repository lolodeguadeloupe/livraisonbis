<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Restaurant;
use Illuminate\Support\Facades\Validator;

class RestaurantController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'prenom' => 'required|string|max:255',
            'nom' => 'required|string|max:255',
            'restaurantNom' => 'required|string|max:255',
            'adresse' => 'required|string',
            'rdv' => 'required|date',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        try {
            $restaurant = Restaurant::create([
                'proprietaire_prenom' => $request->prenom,
                'proprietaire_nom' => $request->nom,
                'nom' => $request->restaurantNom,
                'adresse' => $request->adresse,
                'rdv' => $request->rdv,
            ]);

            return response()->json([
                'success' => true,
                'message' => 'Restaurant enregistré avec succès',
                'data' => $restaurant
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Une erreur est survenue lors de l\'enregistrement'
            ], 500);
        }
    }
}
