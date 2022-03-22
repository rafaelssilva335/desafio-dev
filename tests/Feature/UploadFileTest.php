<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Testing\File;
use Tests\TestCase;
use App\Models\Report;
use Illuminate\Http\UploadedFile;

class UploadFileTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function test_case_file_upload()
    {
        Storage::fake('local');
 
        $file = UploadedFile::fake()->create('avatar.txt');
 
        $response = $this->post(route('CNAB.store'), [
            'CNABFile' => $file,
        ]);
        
        Storage::disk('local')->assertExists('file/'.$file->hashName());
    }
}
