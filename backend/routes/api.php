use Illuminate\Http\Request;

Route::post('/register', function (Request $request) {
    return response()->json([
        'name' => $request->name,
        'email' => $request->email,
        'password' => $request->password
    ], 201);
});
